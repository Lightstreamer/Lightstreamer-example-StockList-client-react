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
define(["./StockList"],function(StockList){

  return function(attachId,items,fields){

    this.render = function() {
      ReactDOM.render(
          <table>
            <thead>
            <tr>
              {
                fields.map(function(fieldDef) {
                  return (
                      <th key={fieldDef.field} data-field={fieldDef.field}>{fieldDef.label}</th>
                  );
                })
              }
            </tr>
            </thead>
            <StockList items={items} fields={fields}  />
          </table>,
          document.getElementById(attachId)
      );
    };


  }

});