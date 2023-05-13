const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { options } = config;

async function executeTest(){

  let feature = { "feature" : "Navegacion", "before" : "Navegacion/Escenario_1",  "after":"Navegacion_V4/Escenario_1"}
  let pathAfter = './results/'+ feature["after"]
  let pathBefore = './results/' + feature["before"]
  var filesBefore = fs.readdirSync(pathBefore)
  var filesAfter = fs.readdirSync(pathAfter)
    if(filesBefore.length === 0 && filesAfter.length === 0){
      return;
    }

    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");    

    for(b of filesBefore){
        const data = await compareImages(
            fs.readFileSync(`${pathBefore}/${b}`),
            fs.readFileSync(`${pathAfter}/${b}`),
            options
        );

        resultInfo[b] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/report/${feature["feature"]}/compare-${b}`, data.getBuffer());
    }

    fs.writeFileSync(`./results/report/${feature["feature"]}/report.html`, createReport(datetime, resultInfo, feature, filesBefore));
    fs.copyFileSync('./index.css', `./results/report/${feature["feature"]}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  

  }

  function step(b, info, feature){
	var aux = `<div class=" browser" id="test0">
				<div class=" btitle">
					<h2>Escenario: ${b}</h2>
					<p>Data: ${JSON.stringify(info)}</p>
				</div>
				<div class="imgline">
					<div class="imgcontainer">
						<span class="imgname">Reference</span>
						<img class="img2" src="../../${feature["before"]}/${b}" id="refImage" label="Reference">
					</div>
					<div class="imgcontainer">
						<span class="imgname">Test</span>
						<img class="img2" src="../../${feature["after"]}/${b}" id="testImage" label="Test">
					</div>
				</div>
				<div class="imgline">
					<div class="imgcontainer">
						<span class="imgname">Diff</span>
						<img class="imgfull" src="../${feature["feature"]}/compare-${b}" id="diffImage" label="Diff">
					</div>
				</div>
			</div>`
			return aux;
	}

function createReport(datetime, resInfo, feature, filesBefore){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${filesBefore.map(b=>step(b, resInfo[b+'.png'], feature))}
            </div>
        </body>
    </html>`
}
(async ()=>console.log(await executeTest()))();