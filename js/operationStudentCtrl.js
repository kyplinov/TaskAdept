mainApp.controller('operationStudentCtrl', function ($scope) {

    /* функция добавления нового студента  */
    $scope.addStudent = function addStudent (student) {
        if (angular.isDefined(student) &&
            angular.isDefined(student.firstName) &&
            angular.isDefined(student.lastName)) {
            $scope.students.push(
                {
                    firstName: student.firstName,
                    lastName: student.lastName,
                    sum: 0,
                    subjects: [
                        {name:'Physics',marks:0},
                        {name:'Chemistry',marks:0},
                        {name:'Math',marks:0},
                        {name:'English',marks:0},
                        {name:'Hindi',marks:0}
                    ]
                }
            )
        }
    };

    /* функция удаления студента */
    $scope.removeStudent = function removeStudent (index) {
        $scope.students.splice(index, 1);
        index = null;
    };

    /* функция перемещения выбранного студента вверх */
    $scope.upStudent = function upStudent (index){
        let i = index;
        if(index === 0) {
            console.error('Out of range');
            return null;
        }
        let highItem = $scope.students[--index];
        let thisItem = $scope.students[i];
        $scope.students.splice(--i,2, thisItem, highItem);
    };

    /* функция перемещения выбранного студента вниз */
    $scope.downStudent = function downStudent (index){
        let i = index;
        let arrLenght = ($scope.students.length);
        if(index === --arrLenght) {
            console.error('Out of range');
            return null;
        }
        let lowItem = $scope.students[++index];
        let thisItem = $scope.students[i];
        $scope.students.splice(i,2, lowItem, thisItem);
    };

    /* функция выбора студента в таблице */
    $scope["selectedRow"] = null;
    $scope.handleEvent = function handleEvent (index) {
        $scope.selectedRow = index;
    };

    /* функция возвращающая общую сумму оценок и результата условия по сумме */
    $scope.getTotal = function getTotal (student){
        let total = 0;
        for(let i = 0; i < student.subjects.length; i++){
            const subject = student.subjects[i];
            total = (subject.marks + total);
        }
        let res = (total > 350) ? 'да' : 'нет';
        return {
            res,
            total
        };
    }
});
