// Your code here!
//__________________________________________________________________________PROCESS FILE______________________________________

function readContents(rootDir) {
    // Loop through all the files in the temp directory
    fs.readdir(rootDir,
        function (err, files) {
            if (err) {//error message
                console.error("Could not list the directory.", err);
                process.exitCode = 1;
            }
            counter = files.length;
            files.forEach(function (file, index) {
                // Make one pass and process all contents
                var fromPath = path.join(rootDir, file);
                fs.stat(fromPath, function (error, stat) {
                    var contents = processFileInfo(error, stat, fromPath);
                    //culmination of everything so far(the words ready to be processed)
                });
            });
        });

}
function processFileInfo(error, stat, fromPath) {
    var outstr;
    if (error) { //error message
        console.error("Error stating file.", error);
        return;
    }
    if (stat.isFile()) {
        var extension = fromPath.split('.');
        if (extension.length > 1 && extension[extension.length - 1] === 'txt') {
            //finding the right files and showing the computer where they are
            fs.readFile(fromPath,
                function (err, buf) {
                    counter--;
                    var outstr = buf.toString();//converting the 10s to legible words
                    myFiles.push(outstr);//adding the words to myFiles
                    if (counter === 0) {
                        seperateText();
                    }
                });
        }
    }
}

function seperateText() {
    while (counter > 0) {

    };
    text = myFiles.join(' ');//so the words can be specified as 'each word is seperated by a space'
    text = text.replace(/[^\w\s?!.][0-9][.{2}]-|_/g, "").replace(/\s+/g, " ").split(' ');
    return text;
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++USE TEXT+++++++++++++++++++++++++++++++++++++++++
function getUniqueWords(wordList) {
    wordList.forEach(function (word, index) {
        if (dict.hasOwnProperty(word)) {//for the unique word you have found...
            dict[word].this_count++ //...add one to the number of words
        }
        else {
            dict[word] = { this_count: 1 }; //...give dict's word's this_count a value of 1
        }
    });
    return dict;
};
//=============================================================================DECODE TEXT====================================