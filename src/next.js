var data = JSON.parse($response.body);
try{
indices_to_remove=[];
for(var i=0; i < data.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[1].itemSectionRenderer.contents.length; i++){

if(data.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[1].itemSectionRenderer.contents[i].adSlotRenderer){
indices_to_remove.push(i);
}
}

for(var i = indices_to_remove.length - 1; j >= 0; j--){
data.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[1].itemSectionRenderer.contents.splice(indices_to_remove[j],1);
}

}catch(e){
console.log("Error !!");
console.log(e);
}
$response.body = JSON.stringify(data);
$done($response);
