$(function(){$('[data-tutorial="split-view"]').each(function(t,a){var i="split-view-"+t,s=$(this).data("tutorial-type")||"styles";_addToGrouping($(this),i),_setupSwitcher($(this),$("."+i),s),_setupToggler($(this),$("."+i),s),_setupPreview($(this),$("."+i)),"class"==s?(_applySwitcherClass($("."+i).find('[data-tutorial="split-view"]')),_applyTogglerClass($("."+i).find('[data-tutorial="split-view"]'))):(_applySwitcherValue($("."+i).find('[data-tutorial="split-view"]')),_applyTogglerValue($("."+i).find('[data-tutorial="split-view"]')))})}),$(document).on("click","[data-swoption]",function(t){var a=$(this).data("tutorial-type")||"styles",i=$(this).closest(".split-view-container").find('[data-tutorial="split-view"]'),s=$(this).attr("data-swoption"),l=i.attr("data-swoptions");i.removeClass(l.split(",").join(" ")),"class"==a?_applySwitcherClass(i,s):_applySwitcherValue(i,s)}),$(document).on("click","[data-toption]",function(t){var a=$(this).data("tutorial-type")||"styles",i=$(this).closest(".split-view-container").find('[data-tutorial="split-view"]'),s=$(this).attr("data-toption"),l=i.attr("data-toptions");i.removeClass(l.split(",").join(" ")),"class"==a?_applyTogglerClass(i,s):_applyTogglerValue(i,s)});var _deselectOptions=function(t,a){t.closest(".split-view-container").find("[data-"+a+"]").removeClass("active")},_selectOption=function(t,a,i){t.closest(".split-view-container").find("[data-"+a+"='"+i+"']").addClass("active")},_applyCss=function(t,a,i){t.css(a,i)},_applyClass=function(t,a,i){t.addClass(i)},_getFirstValue=function(t,a){var i=t.attr("data-"+a),s=i.split(",");return s[0]},_applyTogglerValue=function(t,a){var i="toption",s=_getFirstValue(t,i+"s");a=a||s;var l=t.attr("data-toggle");_deselectOptions(t,i),_selectOption(t,i,a),_applyCss(t,l,a)},_applyTogglerClass=function(t,a){if(t.attr("data-toggle")){var i="toption",s=_getFirstValue(t,i+"s");a=a||s;var l=t.attr("data-toggle"),e="parent";t.attr("data-apply")&&(e=t.attr("data-apply"));var p=t.attr("data-toptions");_deselectOptions(t,i),_selectOption(t,i,a),"parent"==e?(t.removeClass(p.split(",").join(" ")),_applyClass(t,l,a)):"child"==e?(t.find("> *").removeClass(p.split(",").join(" ")),_applyClass(t.children(),l,a)):"second_level"==e?(t.find("> * > *:first-child").removeClass(p.split(",").join(" ")),_applyClass(t.children().find("*:first-child"),l,a)):(t.find("> *:first-child").removeClass(p.split(",").join(" ")),_applyClass(t.children(":eq("+e+")"),l,a))}},_applySwitcherValue=function(t,a){var i="swoption",s=_getFirstValue(t,i+"s");a=a||s;var l=t.attr("data-switcher"),e="parent";t.attr("data-apply")&&(e=t.attr("data-apply")),_deselectOptions(t,i),_selectOption(t,i,a),"parent"==e?_applyCss(t,l,a):"child"==e?_applyCss(t.children(),l,a):_applyCss(t.children(":eq("+e+")"),l,a)},_applySwitcherClass=function(t,a){if(t.attr("data-switcher")){var i="swoption",s=_getFirstValue(t,i+"s");a=a||s;var l=t.attr("data-switcher"),e="parent";t.attr("data-apply")&&(e=t.attr("data-apply")),_deselectOptions(t,i),_selectOption(t,i,a);var p=t.attr("data-swoptions");"parent"==e?(t.removeClass(p.split(",").join(" ")),_applyClass(t,l,a)):"child"==e?(t.find("> *").removeClass(p.split(",").join(" ")),_applyClass(t.children(),l,a)):"second_level"==e?(t.find("> * > *:first-child").removeClass(p.split(",").join(" ")),_applyClass(t.children().find("*:first-child"),l,a)):(t.find("> *:first-child").removeClass(p.split(",").join(" ")),_applyClass(t.children(":eq("+e+")"),l,a))}},_setupSwitcher=function(t,a,i){var s="";if(t.attr("data-switcher")){var l,e=t.attr("data-switcher"),p=t.attr("data-swoptions"),n=[],o=p.split(",");for(l=0;l<o.length;++l)n.push("<li data-swoption='"+o[l]+"' data-tutorial-type='"+i+"'>"+o[l]+"</li>");s=n.join(""),s="<li class='heading'><h3>"+e+"</h3></li>"+s}a.find("ul.switch-options").append(s)},_setupToggler=function(t,a,i){var s="";if(t.attr("data-toggle")){var l,e=t.attr("data-toggle"),p=t.attr("data-toptions"),n=[],o=p.split(",");for(l=0;l<o.length;++l)n.push("<li data-toption='"+o[l]+"' data-tutorial-type='"+i+"'>"+o[l]+"</li>");s=n.join(""),s="<li class='heading'>"+e+"</li>"+s}a.find(".toggler").append(s)},_setupPreview=function(t,a){var i=t.clone();a.find(".preview-card").prepend(i.addClass("shown"))},_addToGrouping=function(t,a){var i=t.attr("data-group"),s=$("#split-view-template").html(),l=$(s).addClass(a);$(i).append(l)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJlYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsIml0ZW0iLCJ0dXRvcmlhbF90eXBlIiwidGhpcyIsImRhdGEiLCJfYWRkVG9Hcm91cGluZyIsIl9zZXR1cFN3aXRjaGVyIiwiX3NldHVwVG9nZ2xlciIsIl9zZXR1cFByZXZpZXciLCJfYXBwbHlTd2l0Y2hlckNsYXNzIiwiZmluZCIsIl9hcHBseVRvZ2dsZXJDbGFzcyIsIl9hcHBseVN3aXRjaGVyVmFsdWUiLCJfYXBwbHlUb2dnbGVyVmFsdWUiLCJkb2N1bWVudCIsIm9uIiwiZXZlbnQiLCJ0dXRvcmlhbCIsImNsb3Nlc3QiLCJhdHRyIiwic3dpdGNoZXJfb3B0aW9ucyIsInJlbW92ZUNsYXNzIiwic3BsaXQiLCJqb2luIiwidG9nZ2xlX29wdGlvbnMiLCJfZGVzZWxlY3RPcHRpb25zIiwiZWwiLCJ0eXBlIiwiX3NlbGVjdE9wdGlvbiIsImFkZENsYXNzIiwiX2FwcGx5Q3NzIiwiY3NzIiwiX2FwcGx5Q2xhc3MiLCJfZ2V0Rmlyc3RWYWx1ZSIsIm9wdGlvbnMiLCJhcnIiLCJmaXJzdF92YWx1ZSIsInRvZ2dsZXIiLCJhcHBseSIsImNoaWxkcmVuIiwic3dpdGNoZXIiLCIkaXRlbSIsIm9wdGlvbnNfaHRtbCIsImkiLCJvcHRpb25fbGkiLCJvcHRpb25zX2FyciIsImxlbmd0aCIsInB1c2giLCJhcHBlbmQiLCJ0b3B0aW9uc19odG1sIiwidCIsInRvZ2dsZXJfaGVhZGluZyIsInRvZ2dsZXJfb3B0aW9ucyIsInRvZ2dsZXJfbGkiLCJ0b3B0aW9uc19hcnIiLCJ0dXRvcmlhbF9odG1sIiwiY2xvbmUiLCJwcmVwZW5kIiwiZ3JvdXBpbmciLCJzcGxpdF92aWV3X3RlbXBsYXRlIiwiaHRtbCIsInRlbXBsYXRlX2h0bWwiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFLFdBQ0FBLEVBQUUsZ0NBQWdDQyxLQUFLLFNBQVNDLEVBQU9DLEdBQ3JELEdBQUlDLEdBQU8sY0FB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LEVBQWUsMkJBQTJCRixFQUFTLGFBQWVFLEVBRXBFRCxFQUFNL0IsS0FBSyxxQkFBcUJzQyxPQUFPTixJQUdyQ25DLGNBQWdCLFNBQVNVLEVBQVV3QixFQUFPdkMsR0FDNUMsR0FBSStDLEdBQWdCLEVBQ3BCLElBQUloQyxFQUFTRSxLQUFLLGVBQWdCLENBQ2hDLEdBSUkrQixHQUpBQyxFQUFrQmxDLEVBQVNFLEtBQUssZUFDaENpQyxFQUFrQm5DLEVBQVNFLEtBQUssaUJBQ2hDa0MsS0FDQUMsRUFBZUYsRUFBZ0I5QixNQUFNLElBRXpDLEtBQUs0QixFQUFJLEVBQUdBLEVBQUlJLEVBQWFSLFNBQVVJLEVBQ3JDRyxFQUFXTixLQUFLLHFCQUFxQk8sRUFBYUosR0FBRyx5QkFBeUJoRCxFQUFjLEtBQUtvRCxFQUFhSixHQUFHLFFBRW5IRCxHQUFnQkksRUFBVzlCLEtBQUssSUFDaEMwQixFQUFnQix1QkFBdUJFLEVBQWdCLFFBQVVGLEVBRW5FUixFQUFNL0IsS0FBSyxZQUFZc0MsT0FBT0MsSUFHNUJ6QyxjQUFnQixTQUFTUyxFQUFVd0IsR0FDckMsR0FBSWMsR0FBZ0J0QyxFQUFTdUMsT0FDN0JmLEdBQU0vQixLQUFLLGlCQUFpQitDLFFBQVFGLEVBQWMxQixTQUFTLFdBR3pEeEIsZUFBaUIsU0FBU1ksRUFBVWhCLEdBQ3RDLEdBQUl5RCxHQUFXekMsRUFBU0UsS0FBSyxjQUN6QndDLEVBQXNCOUQsRUFBRSx3QkFBd0IrRCxPQUNoREMsRUFBZ0JoRSxFQUFFOEQsR0FBcUI5QixTQUFTNUIsRUFDcERKLEdBQUU2RCxHQUFVVixPQUFPYSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcbiAgJCgnW2RhdGEtdHV0b3JpYWw9XCJzcGxpdC12aWV3XCJdJykuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpe1xuICAgIHZhciBpdGVtID0gXCJzcGxpdC12aWV3LVwiK2luZGV4O1xuICAgIHZhciB0dXRvcmlhbF90eXBlID0gJCh0aGlzKS5kYXRhKFwidHV0b3JpYWwtdHlwZVwiKSB8fCBcInN0eWxlc1wiO1xuXG4gICAgX2FkZFRvR3JvdXBpbmcoJCh0aGlzKSwgaXRlbSk7XG4gICAgX3NldHVwU3dpdGNoZXIoJCh0aGlzKSwgJChcIi5cIiArIGl0ZW0pLCB0dXRvcmlhbF90eXBlKTtcbiAgICBfc2V0dXBUb2dnbGVyKCQodGhpcyksICQoXCIuXCIgKyBpdGVtKSwgdHV0b3JpYWxfdHlwZSk7XG4gICAgX3NldHVwUHJldmlldygkKHRoaXMpLCAkKFwiLlwiICsgaXRlbSkpO1xuXG4gICAgaWYgKHR1dG9yaWFsX3R5cGUgPT0gXCJjbGFzc1wiKXtcbiAgICAgIF9hcHBseVN3aXRjaGVyQ2xhc3MoJChcIi5cIiArIGl0ZW0pLmZpbmQoJ1tkYXRhLXR1dG9yaWFsPVwic3BsaXQtdmlld1wiXScpKTtcbiAgICAgIF9hcHBseVRvZ2dsZXJDbGFzcygkKFwiLlwiICsgaXRlbSkuZmluZCgnW2RhdGEtdHV0b3JpYWw9XCJzcGxpdC12aWV3XCJdJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYXBwbHlTd2l0Y2hlclZhbHVlKCQoXCIuXCIgKyBpdGVtKS5maW5kKCdbZGF0YS10dXRvcmlhbD1cInNwbGl0LXZpZXdcIl0nKSk7XG4gICAgICBfYXBwbHlUb2dnbGVyVmFsdWUoJChcIi5cIiArIGl0ZW0pLmZpbmQoJ1tkYXRhLXR1dG9yaWFsPVwic3BsaXQtdmlld1wiXScpKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1zd29wdGlvbl1cIiwgZnVuY3Rpb24oZXZlbnQpe1xuICB2YXIgdHV0b3JpYWxfdHlwZSA9ICQodGhpcykuZGF0YShcInR1dG9yaWFsLXR5cGVcIikgfHwgXCJzdHlsZXNcIjtcbiAgdmFyIHR1dG9yaWFsID0gJCh0aGlzKS5jbG9zZXN0KFwiLnNwbGl0LXZpZXctY29udGFpbmVyXCIpLmZpbmQoJ1tkYXRhLXR1dG9yaWFsPVwic3BsaXQtdmlld1wiXScpO1xuICB2YXIgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3dvcHRpb24nKTtcblxuICB2YXIgc3dpdGNoZXJfb3B0aW9ucyA9IHR1dG9yaWFsLmF0dHIoXCJkYXRhLXN3b3B0aW9uc1wiKTtcbiAgdHV0b3JpYWwucmVtb3ZlQ2xhc3Moc3dpdGNoZXJfb3B0aW9ucy5zcGxpdChcIixcIikuam9pbihcIiBcIikpO1xuXG4gIGlmICh0dXRvcmlhbF90eXBlID09IFwiY2xhc3NcIil7XG4gICAgX2FwcGx5U3dpdGNoZXJDbGFzcyh0dXRvcmlhbCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIF9hcHBseVN3aXRjaGVyVmFsdWUodHV0b3JpYWwsIHZhbHVlKTtcbiAgfVxufSk7XG5cbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS10b3B0aW9uXVwiLCBmdW5jdGlvbihldmVudCl7XG4gIHZhciB0dXRvcmlhbF90eXBlID0gJCh0aGlzKS5kYXRhKFwidHV0b3JpYWwtdHlwZVwiKSB8fCBcInN0eWxlc1wiO1xuICB2YXIgdHV0b3JpYWwgPSAkKHRoaXMpLmNsb3Nlc3QoXCIuc3BsaXQtdmlldy1jb250YWluZXJcIikuZmluZCgnW2RhdGEtdHV0b3JpYWw9XCJzcGxpdC12aWV3XCJdJyk7XG4gIHZhciB2YWx1ZSA9ICQodGhpcykuYXR0cignZGF0YS10b3B0aW9uJyk7XG5cbiAgdmFyIHRvZ2dsZV9vcHRpb25zID0gdHV0b3JpYWwuYXR0cihcImRhdGEtdG9wdGlvbnNcIik7XG4gIHR1dG9yaWFsLnJlbW92ZUNsYXNzKHRvZ2dsZV9vcHRpb25zLnNwbGl0KFwiLFwiKS5qb2luKFwiIFwiKSk7XG5cbiAgaWYgKHR1dG9yaWFsX3R5cGUgPT0gXCJjbGFzc1wiKXtcbiAgICBfYXBwbHlUb2dnbGVyQ2xhc3ModHV0b3JpYWwsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBfYXBwbHlUb2dnbGVyVmFsdWUodHV0b3JpYWwsIHZhbHVlKTtcbiAgfVxufSk7XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUWUxFIFNXSVRDSEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIF9kZXNlbGVjdE9wdGlvbnMgPSBmdW5jdGlvbihlbCwgdHlwZSl7XG4gIGVsLmNsb3Nlc3QoXCIuc3BsaXQtdmlldy1jb250YWluZXJcIilcbiAgICAgICAgICAuZmluZChcIltkYXRhLVwiK3R5cGUrXCJdXCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xufVxuXG52YXIgX3NlbGVjdE9wdGlvbiA9IGZ1bmN0aW9uKGVsLCB0eXBlLCB2YWx1ZSl7XG4gIGVsLmNsb3Nlc3QoXCIuc3BsaXQtdmlldy1jb250YWluZXJcIilcbiAgICAgICAgICAuZmluZChcIltkYXRhLVwiK3R5cGUrXCI9J1wiK3ZhbHVlK1wiJ11cIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG59O1xuXG52YXIgX2FwcGx5Q3NzID0gZnVuY3Rpb24oZWwsIGF0dHIsIHZhbHVlKXtcbiAgZWwuY3NzKGF0dHIsIHZhbHVlKTtcbn07XG5cbnZhciBfYXBwbHlDbGFzcyA9IGZ1bmN0aW9uKGVsLCBhdHRyLCB2YWx1ZSl7XG4gIGVsLmFkZENsYXNzKHZhbHVlKTtcbn07XG5cbnZhciBfZ2V0Rmlyc3RWYWx1ZSA9IGZ1bmN0aW9uKGVsLCB0eXBlKXtcbiAgdmFyIG9wdGlvbnMgPSBlbC5hdHRyKFwiZGF0YS1cIiArIHR5cGUpO1xuICB2YXIgYXJyID0gb3B0aW9ucy5zcGxpdCgnLCcpO1xuICByZXR1cm4gYXJyWzBdO1xufTtcblxudmFyIF9hcHBseVRvZ2dsZXJWYWx1ZSA9IGZ1bmN0aW9uKHR1dG9yaWFsLCB2YWx1ZSkge1xuICB2YXIgdHlwZSA9IFwidG9wdGlvblwiO1xuICB2YXIgZmlyc3RfdmFsdWUgPSBfZ2V0Rmlyc3RWYWx1ZSh0dXRvcmlhbCwgdHlwZStcInNcIik7XG4gIHZhbHVlID0gdmFsdWUgfHwgZmlyc3RfdmFsdWU7XG5cbiAgdmFyIHRvZ2dsZXIgPSB0dXRvcmlhbC5hdHRyKFwiZGF0YS10b2dnbGVcIik7XG4gIF9kZXNlbGVjdE9wdGlvbnModHV0b3JpYWwsIHR5cGUpO1xuICBfc2VsZWN0T3B0aW9uKHR1dG9yaWFsLCB0eXBlLCB2YWx1ZSk7XG4gIF9hcHBseUNzcyh0dXRvcmlhbCwgdG9nZ2xlciwgdmFsdWUpO1xufTtcblxudmFyIF9hcHBseVRvZ2dsZXJDbGFzcyA9IGZ1bmN0aW9uKHR1dG9yaWFsLCB2YWx1ZSkge1xuICBpZiggdHV0b3JpYWwuYXR0cihcImRhdGEtdG9nZ2xlXCIpICl7XG4gICAgdmFyIHR5cGUgPSBcInRvcHRpb25cIjtcbiAgICB2YXIgZmlyc3RfdmFsdWUgPSBfZ2V0Rmlyc3RWYWx1ZSh0dXRvcmlhbCwgdHlwZStcInNcIik7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCBmaXJzdF92YWx1ZTtcblxuICAgIHZhciB0b2dnbGVyID0gdHV0b3JpYWwuYXR0cihcImRhdGEtdG9nZ2xlXCIpO1xuICAgIHZhciBhcHBseSA9IFwicGFyZW50XCI7XG4gICAgaWYoIHR1dG9yaWFsLmF0dHIoXCJkYXRhLWFwcGx5XCIpICl7XG4gICAgICBhcHBseSA9IHR1dG9yaWFsLmF0dHIoXCJkYXRhLWFwcGx5XCIpO1xuICAgIH1cblxuICAgIHZhciBzd2l0Y2hlcl9vcHRpb25zID0gdHV0b3JpYWwuYXR0cihcImRhdGEtdG9wdGlvbnNcIik7XG5cbiAgICBfZGVzZWxlY3RPcHRpb25zKHR1dG9yaWFsLCB0eXBlKTtcbiAgICBfc2VsZWN0T3B0aW9uKHR1dG9yaWFsLCB0eXBlLCB2YWx1ZSk7XG5cbiAgICBpZihhcHBseSA9PSBcInBhcmVudFwiKXtcbiAgICAgIHR1dG9yaWFsLnJlbW92ZUNsYXNzKHN3aXRjaGVyX29wdGlvbnMuc3BsaXQoXCIsXCIpLmpvaW4oXCIgXCIpKTtcbiAgICAgIF9hcHBseUNsYXNzKHR1dG9yaWFsLCB0b2dnbGVyLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmKGFwcGx5ID09IFwiY2hpbGRcIikge1xuICAgICAgdHV0b3JpYWwuZmluZChcIj4gKlwiKS5yZW1vdmVDbGFzcyhzd2l0Y2hlcl9vcHRpb25zLnNwbGl0KFwiLFwiKS5qb2luKFwiIFwiKSk7XG4gICAgICBfYXBwbHlDbGFzcyh0dXRvcmlhbC5jaGlsZHJlbigpLCB0b2dnbGVyLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmKGFwcGx5ID09IFwic2Vjb25kX2xldmVsXCIpe1xuICAgICAgdHV0b3JpYWwuZmluZChcIj4gKiA+ICo6Zmlyc3QtY2hpbGRcIikucmVtb3ZlQ2xhc3Moc3dpdGNoZXJfb3B0aW9ucy5zcGxpdChcIixcIikuam9pbihcIiBcIikpO1xuICAgICAgX2FwcGx5Q2xhc3ModHV0b3JpYWwuY2hpbGRyZW4oKS5maW5kKFwiKjpmaXJzdC1jaGlsZFwiKSwgdG9nZ2xlciwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0dXRvcmlhbC5maW5kKFwiPiAqOmZpcnN0LWNoaWxkXCIpLnJlbW92ZUNsYXNzKHN3aXRjaGVyX29wdGlvbnMuc3BsaXQoXCIsXCIpLmpvaW4oXCIgXCIpKTtcbiAgICAgIF9hcHBseUNsYXNzKHR1dG9yaWFsLmNoaWxkcmVuKFwiOmVxKFwiK2FwcGx5K1wiKVwiKSwgdG9nZ2xlciwgdmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIF9hcHBseVN3aXRjaGVyVmFsdWUgPSBmdW5jdGlvbih0dXRvcmlhbCwgdmFsdWUpIHtcbiAgdmFyIHR5cGUgPSBcInN3b3B0aW9uXCI7XG4gIHZhciBmaXJzdF92YWx1ZSA9IF9nZXRGaXJzdFZhbHVlKHR1dG9yaWFsLCB0eXBlK1wic1wiKTtcbiAgdmFsdWUgPSB2YWx1ZSB8fCBmaXJzdF92YWx1ZTtcblxuICB2YXIgc3dpdGNoZXIgPSB0dXRvcmlhbC5hdHRyKFwiZGF0YS1zd2l0Y2hlclwiKTtcbiAgdmFyIGFwcGx5ID0gXCJwYXJlbnRcIjtcbiAgaWYoIHR1dG9yaWFsLmF0dHIoXCJkYXRhLWFwcGx5XCIpICl7XG4gICAgYXBwbHkgPSB0dXRvcmlhbC5hdHRyKFwiZGF0YS1hcHBseVwiKTtcbiAgfVxuXG4gIF9kZXNlbGVjdE9wdGlvbnModHV0b3JpYWwsIHR5cGUpO1xuICBfc2VsZWN0T3B0aW9uKHR1dG9yaWFsLCB0eXBlLCB2YWx1ZSk7XG5cbiAgaWYoYXBwbHkgPT0gXCJwYXJlbnRcIil7XG4gICAgX2FwcGx5Q3NzKHR1dG9yaWFsLCBzd2l0Y2hlciwgdmFsdWUpO1xuICB9IGVsc2UgaWYoYXBwbHkgPT0gXCJjaGlsZFwiKSB7XG4gICAgX2FwcGx5Q3NzKHR1dG9yaWFsLmNoaWxkcmVuKCksIHN3aXRjaGVyLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgX2FwcGx5Q3NzKHR1dG9yaWFsLmNoaWxkcmVuKFwiOmVxKFwiK2FwcGx5K1wiKVwiKSwgc3dpdGNoZXIsIHZhbHVlKTtcbiAgfVxufTtcblxudmFyIF9hcHBseVN3aXRjaGVyQ2xhc3MgPSBmdW5jdGlvbih0dXRvcmlhbCwgdmFsdWUpIHtcbiAgaWYoIHR1dG9yaWFsLmF0dHIoXCJkYXRhLXN3aXRjaGVyXCIpICl7XG4gICAgdmFyIHR5cGUgPSBcInN3b3B0aW9uXCI7XG4gICAgdmFyIGZpcnN0X3ZhbHVlID0gX2dldEZpcnN0VmFsdWUodHV0b3JpYWwsIHR5cGUrXCJzXCIpO1xuICAgIHZhbHVlID0gdmFsdWUgfHwgZmlyc3RfdmFsdWU7XG5cbiAgICB2YXIgc3dpdGNoZXIgPSB0dXRvcmlhbC5hdHRyKFwiZGF0YS1zd2l0Y2hlclwiKTtcbiAgICB2YXIgYXBwbHkgPSBcInBhcmVudFwiO1xuICAgIGlmKCB0dXRvcmlhbC5hdHRyKFwiZGF0YS1hcHBseVwiKSApe1xuICAgICAgYXBwbHkgPSB0dXRvcmlhbC5hdHRyKFwiZGF0YS1hcHBseVwiKTtcbiAgICB9XG5cbiAgICBfZGVzZWxlY3RPcHRpb25zKHR1dG9yaWFsLCB0eXBlKTtcbiAgICBfc2VsZWN0T3B0aW9uKHR1dG9yaWFsLCB0eXBlLCB2YWx1ZSk7XG5cbiAgICB2YXIgc3dpdGNoZXJfb3B0aW9ucyA9IHR1dG9yaWFsLmF0dHIoXCJkYXRhLXN3b3B0aW9uc1wiKTtcblxuICAgIGlmKGFwcGx5ID09IFwicGFyZW50XCIpe1xuICAgICAgdHV0b3JpYWwucmVtb3ZlQ2xhc3Moc3dpdGNoZXJfb3B0aW9ucy5zcGxpdChcIixcIikuam9pbihcIiBcIikpO1xuICAgICAgX2FwcGx5Q2xhc3ModHV0b3JpYWwsIHN3aXRjaGVyLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmKGFwcGx5ID09IFwiY2hpbGRcIikge1xuICAgICAgdHV0b3JpYWwuZmluZChcIj4gKlwiKS5yZW1vdmVDbGFzcyhzd2l0Y2hlcl9vcHRpb25zLnNwbGl0KFwiLFwiKS5qb2luKFwiIFwiKSk7XG4gICAgICBfYXBwbHlDbGFzcyh0dXRvcmlhbC5jaGlsZHJlbigpLCBzd2l0Y2hlciwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZihhcHBseSA9PSBcInNlY29uZF9sZXZlbFwiKXtcbiAgICAgIHR1dG9yaWFsLmZpbmQoXCI+ICogPiAqOmZpcnN0LWNoaWxkXCIpLnJlbW92ZUNsYXNzKHN3aXRjaGVyX29wdGlvbnMuc3BsaXQoXCIsXCIpLmpvaW4oXCIgXCIpKTtcbiAgICAgIF9hcHBseUNsYXNzKHR1dG9yaWFsLmNoaWxkcmVuKCkuZmluZChcIio6Zmlyc3QtY2hpbGRcIiksIHN3aXRjaGVyLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR1dG9yaWFsLmZpbmQoXCI+ICo6Zmlyc3QtY2hpbGRcIikucmVtb3ZlQ2xhc3Moc3dpdGNoZXJfb3B0aW9ucy5zcGxpdChcIixcIikuam9pbihcIiBcIikpO1xuICAgICAgX2FwcGx5Q2xhc3ModHV0b3JpYWwuY2hpbGRyZW4oXCI6ZXEoXCIrYXBwbHkrXCIpXCIpLCBzd2l0Y2hlciwgdmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIF9zZXR1cFN3aXRjaGVyID0gZnVuY3Rpb24odHV0b3JpYWwsICRpdGVtLCB0dXRvcmlhbF90eXBlKXtcbiAgdmFyIG9wdGlvbnNfaHRtbCA9IFwiXCI7XG4gIGlmKCB0dXRvcmlhbC5hdHRyKFwiZGF0YS1zd2l0Y2hlclwiKSApe1xuICAgIHZhciBzd2l0Y2hlciA9IHR1dG9yaWFsLmF0dHIoXCJkYXRhLXN3aXRjaGVyXCIpO1xuICAgIHZhciBzd2l0Y2hlcl9vcHRpb25zID0gdHV0b3JpYWwuYXR0cihcImRhdGEtc3dvcHRpb25zXCIpO1xuICAgIHZhciBvcHRpb25fbGkgPSBbXTtcbiAgICB2YXIgb3B0aW9uc19hcnIgPSBzd2l0Y2hlcl9vcHRpb25zLnNwbGl0KCcsJyk7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnNfYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICBvcHRpb25fbGkucHVzaChcIjxsaSBkYXRhLXN3b3B0aW9uPSdcIitvcHRpb25zX2FycltpXStcIicgZGF0YS10dXRvcmlhbC10eXBlPSdcIit0dXRvcmlhbF90eXBlK1wiJz5cIitvcHRpb25zX2FycltpXStcIjwvbGk+XCIpO1xuICAgIH1cbiAgICBvcHRpb25zX2h0bWwgPSBvcHRpb25fbGkuam9pbihcIlwiKTtcbiAgICBvcHRpb25zX2h0bWwgPSBcIjxsaSBjbGFzcz0naGVhZGluZyc+PGgzPlwiK3N3aXRjaGVyK1wiPC9oMz48L2xpPlwiICsgb3B0aW9uc19odG1sO1xuICB9XG4gICRpdGVtLmZpbmQoXCJ1bC5zd2l0Y2gtb3B0aW9uc1wiKS5hcHBlbmQob3B0aW9uc19odG1sKTtcbn07XG5cbnZhciBfc2V0dXBUb2dnbGVyID0gZnVuY3Rpb24odHV0b3JpYWwsICRpdGVtLCB0dXRvcmlhbF90eXBlKXtcbiAgdmFyIHRvcHRpb25zX2h0bWwgPSBcIlwiO1xuICBpZiggdHV0b3JpYWwuYXR0cihcImRhdGEtdG9nZ2xlXCIpICl7XG4gICAgdmFyIHRvZ2dsZXJfaGVhZGluZyA9IHR1dG9yaWFsLmF0dHIoXCJkYXRhLXRvZ2dsZVwiKTtcbiAgICB2YXIgdG9nZ2xlcl9vcHRpb25zID0gdHV0b3JpYWwuYXR0cihcImRhdGEtdG9wdGlvbnNcIik7XG4gICAgdmFyIHRvZ2dsZXJfbGkgPSBbXTtcbiAgICB2YXIgdG9wdGlvbnNfYXJyID0gdG9nZ2xlcl9vcHRpb25zLnNwbGl0KCcsJyk7XG4gICAgdmFyIHQ7XG4gICAgZm9yICh0ID0gMDsgdCA8IHRvcHRpb25zX2Fyci5sZW5ndGg7ICsrdCkge1xuICAgICAgdG9nZ2xlcl9saS5wdXNoKFwiPGxpIGRhdGEtdG9wdGlvbj0nXCIrdG9wdGlvbnNfYXJyW3RdK1wiJyBkYXRhLXR1dG9yaWFsLXR5cGU9J1wiK3R1dG9yaWFsX3R5cGUrXCInPlwiK3RvcHRpb25zX2Fyclt0XStcIjwvbGk+XCIpO1xuICAgIH1cbiAgICB0b3B0aW9uc19odG1sID0gdG9nZ2xlcl9saS5qb2luKFwiXCIpO1xuICAgIHRvcHRpb25zX2h0bWwgPSBcIjxsaSBjbGFzcz0naGVhZGluZyc+XCIrdG9nZ2xlcl9oZWFkaW5nK1wiPC9saT5cIiArIHRvcHRpb25zX2h0bWw7XG4gIH1cbiAgJGl0ZW0uZmluZChcIi50b2dnbGVyXCIpLmFwcGVuZCh0b3B0aW9uc19odG1sKTtcbn07XG5cbnZhciBfc2V0dXBQcmV2aWV3ID0gZnVuY3Rpb24odHV0b3JpYWwsICRpdGVtKSB7XG4gIHZhciB0dXRvcmlhbF9odG1sID0gdHV0b3JpYWwuY2xvbmUoKTtcbiAgJGl0ZW0uZmluZChcIi5wcmV2aWV3LWNhcmRcIikucHJlcGVuZCh0dXRvcmlhbF9odG1sLmFkZENsYXNzKFwic2hvd25cIikpO1xufTtcblxudmFyIF9hZGRUb0dyb3VwaW5nID0gZnVuY3Rpb24odHV0b3JpYWwsIGl0ZW0pIHtcbiAgdmFyIGdyb3VwaW5nID0gdHV0b3JpYWwuYXR0cihcImRhdGEtZ3JvdXBcIik7XG4gIHZhciBzcGxpdF92aWV3X3RlbXBsYXRlID0gJCgnI3NwbGl0LXZpZXctdGVtcGxhdGUnKS5odG1sKCk7XG4gIHZhciB0ZW1wbGF0ZV9odG1sID0gJChzcGxpdF92aWV3X3RlbXBsYXRlKS5hZGRDbGFzcyhpdGVtKTtcbiAgJChncm91cGluZykuYXBwZW5kKHRlbXBsYXRlX2h0bWwpO1xufTtcbiJdfQ==
