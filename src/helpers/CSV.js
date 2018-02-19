export function converStampCSVtoJSON(csv) {
  if (!csv) return;

  let result = [];
  const lines = csv.split("\r");
  lines.splice(0, 1);

  lines.forEach((line, index) => {
    if (!line) return;
    let stampData = line.split('",');
    stampData = stampData.map(stampProperty => stampProperty.replace(/"/g, ""));

    result.push({
      id: index,
      keywords: stampData[0],
      appearDate: stampData[1],
      endOfUseDate: stampData[2],
      value: stampData[3],
      title: stampData[4],
      color: stampData[5],
      place: stampData[6],
      count: stampData[7],
      author: stampData[8],
      currency: stampData[9],
      imageURL: stampData[10]
    });
  });

  return result;
}
