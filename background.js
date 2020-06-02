chrome.contextMenus.create({
  id: "deepl",
  title: "DeepL翻訳",
  contexts: ['selection'],
  type: "normal",
  onclick: (info, tab) => {
    window.open("https://www.deepl.com/translator#en/ja/"+info.selectionText, "_blank");
  }
});
