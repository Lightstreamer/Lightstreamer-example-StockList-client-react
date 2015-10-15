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
define(function() {

  var protocolToUse = document.location.protocol != "file:" ? document.location.protocol : "http:";

  return {
    ADAPTER: "DEMO",
    SERVER: protocolToUse+"//localhost:8080",

    ITEMS: ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"],

    FIELD_DEF: [
      {field: "stock_name", label: "Name"},
      {field: "last_price", label: "Last"},
      {field: "time", label: "Time"},
      {field: "pct_change", label: "Change"},
      {field: "bid_quantity", label: "Bid Size"},
      {field: "bid", label: "Bid"},
      {field: "ask", label: "Ask"},
      {field: "ask_quantity", label: "Ask Size"},
      {field: "min", label: "Min"},
      {field: "max", label: "Max"},
      {field: "ref_price", label: "Ref."},
      {field: "open_price", label: "Open"},
    ]
  };

});