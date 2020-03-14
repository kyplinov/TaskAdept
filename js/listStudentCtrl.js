/* Создание контроллера списка студентов */
mainApp.controller('listStudentCtrl', function($scope, $rootScope) {

    $rootScope.students =
        [
            {
                firstName: "Mahesh",
                lastName: "Parashar",
                sum: 0,
                subjects:[
                    {name:'Physics',marks:70},
                    {name:'Chemistry',marks:80},
                    {name:'Math',marks:65},
                    {name:'English',marks:75},
                    {name:'Hindi',marks:67}
                ]
            },
            {
                firstName: "Houth",
                lastName: "Far",
                sum: 0,
                subjects:[
                    {name:'Physics',marks:20},
                    {name:'Chemistry',marks:30},
                    {name:'Math',marks:60},
                    {name:'English',marks:90},
                    {name:'Hindi',marks:60}
                ]
            }
        ];
});