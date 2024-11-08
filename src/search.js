var data = JSON.parse($response.body);
function __remove_ads_in_section(_section_index){
indices_to_remove = [];
for(var i=0; i < data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[_section_index].itemSectionRenderer.contents.length; i++){
if(data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[_section_index].itemSectionRenderer.contents[i].adSlotRenderer){
indices_to_remove.push(i);
}
}

// remove the item

for(var i = indices_to_remove.length - 1; i >= 0; i--){
data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[_section_index].itemSectionRenderer.contents.splice(indices_to_remove[i], 1);
}
};

try{
for(var j = 0; j < data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents.length; j++){
__remove_ads_in_section(j);
}
}catch(e){
console.log("Error:" + e);
}
$response.body = JSON.stringify(data);
$done($response);
