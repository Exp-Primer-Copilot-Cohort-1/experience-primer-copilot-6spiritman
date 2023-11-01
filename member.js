function skillsMember() {
    // Path: member.js
    var member = {
        name: 'Member',
        url: '/member',
        views: {
            'main@': {
                templateUrl: 'member/member.html',
                controller: 'MemberController',
                controllerAs: 'vm'
            }
        }
    };

    return member;
}