var data = JSON.parse($response.body);
data.playerAds = [];
data.adSlots = [];
data.adPlacements = [];

$response.body = JSON.stringify(data);
$done($response);
