// $(function () {
//          window.onpopstate = function (e) {
//              //点击浏览器的前进后退按钮处理
//              if (e.state) {
//                  document.title = e.state.title;
//                  $.ajax({
//                      type: "get",
//                      url: e.state.url,
//                      success: function (data) {
//                          $("#content").html(data)
//                      },
//                      error: function (data) {
//
//                      }
//                  })
//              }
//          }
//
//          //处理点浏览器返回时候最后一个不刷新页面内容问题
//          var state = {
//              title: document.title,
//              url: document.location.href,
//              otherkey: null
//          };
//          history.replaceState(state, document.title, document.location.href);
//
//
//          $("#nav>li>a").click(function () {
//              var _href = $(this).attr("href");
//              $.ajax({
//                  type: "get",
//                  url: _href,
//                  success: function (data) {
//
//                      //加入到历史状态里面
//                      var state = {
//                          title: data,
//                          url: _href,
//                          otherkey: null
//                      };
//                      history.pushState(state, data, _href);
//                      
//
//                      $("#content").html(data)
//                  },
//                  error: function (data) {
//
//                  }
//              })
//
//              return false;
//          })
//
//  })