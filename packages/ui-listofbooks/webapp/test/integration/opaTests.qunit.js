sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'uilistofbooks/test/integration/FirstJourney',
		'uilistofbooks/test/integration/pages/ListOfBooksList',
		'uilistofbooks/test/integration/pages/ListOfBooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, ListOfBooksList, ListOfBooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('uilistofbooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheListOfBooksList: ListOfBooksList,
					onTheListOfBooksObjectPage: ListOfBooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);