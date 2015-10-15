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
define(["Subscription","./lsClient"],function(Subscription,lsClient){
  var fields = ["stock_name","last_price","time"];
  return React.createClass({

    getInitialState: function() {
      return {};
    },

    componentDidMount: function() {



      this.subscription = new Subscription("MERGE", this.props.item, this.props.fields.map(fieldDef => fieldDef.field));
      this.subscription.setDataAdapter("QUOTE_ADAPTER");
      this.subscription.setRequestedSnapshot("yes");
      this.subscription.addListener(this);

      lsClient.subscribe(this.subscription);
    },

    componentWillUnmount: function() {
      lsClient.unsubscribe(this.subscription);
    },

    onItemUpdate:function(obj) {
      var nextState = {};
      nextState = {};
      obj.forEachField(function(name,pos,val) {
        nextState[name] = val;
      });
      this.setState(nextState);
    },

    render: function () {
      var state = this.state;
      return (
          <tr>
            {
              this.props.fields.map(function (fieldDef) {
                return (
                    <td key={fieldDef.field} data-field={fieldDef.field}>{state[fieldDef.field]}</td>
                );
              })
            }

          </tr>
      );
    }
  });

});