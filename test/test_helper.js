// This file contains a couple of helpers that are to be used for creating tests

import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import React from 'react';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<doctype html><html><body></body></html>');
global.window = global.document.defaultView;

// Make jquery responsible for global.window only, instead of setting itself up
const $ = jquery(global.window);


// build 'renderComponent' helper that should render a given react class for testing
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    return $(ReactDom.findDOMNode(componentInstance));
}

// Build helper for simulating events
// Example usage: $('div').simulate() "this" below points to div in this example
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
}



// Set up chai-jquery
chaiJquery(chai, chai.util, $);


export { renderComponent, expect };
