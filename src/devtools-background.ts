let extensionPanel;

chrome.devtools.panels.create('network2', '', 'network.html', function(panel)
{
    extensionPanel = panel
    console.log('自定义面板创建成功！'); // 注意这个log一般看不到
});