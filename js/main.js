

/**
 * Print current session.
 */
chrome.tabs.query({ currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];


  var list_items = $('<ul>', { id: "js-sortable-items" });

  for (var i = 0; i < tabs.length; i++) {
    console.log(tabs[i]);
    list_items.append(makeListItemFromTab(tabs[i]));
  };


  $('.js-tabs-current-session').append(list_items);

  var sortable = Sortable.create(list_items.get(0));
});


function makeListItemFromTab(tabObject) {
  var image = $('<img>', {
    src: tabObject.favIconUrl
  });

  var link = $('<a>', {
    href: tabObject.url,
    html: tabObject.title,
    target: "_blank"
  });

  return $( '<li>', {
    html: image.add(link)
  });
}