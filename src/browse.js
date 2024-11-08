var data = JSON.parse($response.body);
try{

indices_to_remove = [];
for(var i=0; i < data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents.length;i++){
  _rcihItem = data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[i].richItemRenderer;
  if(_rcihItem && _rcihItem.content && _rcihItem.content.adSlotRenderer){
    indices_to_remove.push(i);
  }
}

for(var i = indices_to_remove.length - 1; i >= 0; i--){
  data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents.splice(indices_to_remove[i], 1);
}

}catch(e){
console.log("Error", e);
}

try{
indices_to_remove = [];

for(var i = 0; i < data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems.length; i++){
if(data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems[i].richItemRenderer.content.adSlotRenderer){
indices_to_remove.push(i);
}
}

for(var i = indices_to_remove.length - 1; i >= 0; i--){
data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems.splice(indices_to_remove[i], 1);
}

}catch(e){
console.log("Error", e);
}

$response.body = JSON.stringify(data);


$done($response);
