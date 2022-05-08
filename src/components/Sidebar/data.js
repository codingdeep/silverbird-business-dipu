const data = [
    {
        id: "1",
        title: 'Dashboard',
        link: '/',
        icon: 'mdi mdi-grid',
        child: false
    },
    {
        id: "2",
        title: 'UI',
        icon: 'mdi mdi-calendar-account',
        child: [
            {

                cId: 1,
                title: "Calender",
                link: '/calender',
            },
            {
                cId: 2,
                title: "Accordion",
                link: '/link2',
            }
        ]
    },
    {
        id: "3",
        title: 'Customers',
        link: '/customers',
        icon: 'mdi mdi-account-multiple-outline',
        child: false
    },
];

export default data;