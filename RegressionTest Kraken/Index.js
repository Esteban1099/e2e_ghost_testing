const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { options } = config;

async function executeTest(){
  let pathAfter = './results/after'
  let pathBefore = './results/before'
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
        fs.writeFileSync(`./results/report/compare-${b}`, data.getBuffer());
    }

    fs.writeFileSync(`./results/report/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/report/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }

  function browser(b, info){
	var aux = `<div class=" browser" id="test0">
				<div class=" btitle">
					<h2>Escenario: ${b}</h2>
					<p>Data: ${JSON.stringify(info)}</p>
				</div>
				<div class="imgline">
					<div class="imgcontainer">
						<span class="imgname">Reference</span>
						<img class="img2" src="../before/${b}.png" id="refImage" label="Reference">
					</div>
					<div class="imgcontainer">
						<span class="imgname">Test</span>
						<img class="img2" src="../after/${b}.png" id="testImage" label="Test">
					</div>
				</div>
				<div class="imgline">
					<div class="imgcontainer">
						<span class="imgname">Diff</span>
						<img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
					</div>
				</div>
			</div>`
			return aux;
	}

function createReport(datetime, resInfo){
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
                ${config.browsers.map(b=>browser(b, resInfo[b+'.png']))}
            </div>
        </body>
    </html>`
}
(async ()=>console.log(await executeTest()))();