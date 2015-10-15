/*
 Copyright 2016 Lightstreamer s.r.l.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
"use strict";

define(["Subscription", "./lsClient"], function (Subscription, lsClient) {
  var fields = ["stock_name", "last_price", "time"];
  return React.createClass({

    getInitialState: function getInitialState() {
      return {};
    },

    componentDidMount: function componentDidMount() {

      this.subscription = new Subscription("MERGE", this.props.item, this.props.fields.map(function (fieldDef) {
        return fieldDef.field;
      }));
      this.subscription.setDataAdapter("QUOTE_ADAPTER");
      this.subscription.setRequestedSnapshot("yes");
      this.subscription.addListener(this);

      lsClient.subscribe(this.subscription);
    },

    componentWillUnmount: function componentWillUnmount() {
      lsClient.unsubscribe(this.subscription);
    },

    onItemUpdate: function onItemUpdate(obj) {
      var nextState = {};
      nextState = {};
      obj.forEachField(function (name, pos, val) {
        nextState[name] = val;
      });
      this.setState(nextState);
    },

    render: function render() {
      var state = this.state;
      return React.createElement(
        "tr",
        null,
        this.props.fields.map(function (fieldDef) {
          return React.createElement(
            "td",
            { key: fieldDef.field, "data-field": fieldDef.field },
            state[fieldDef.field]
          );
        })
      );
    }
  });
});