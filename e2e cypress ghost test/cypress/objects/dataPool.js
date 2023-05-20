export class DataPool {

    specialCharactersText = [];
    titles = [];
    dates = [];
    hours = [];
    noRegisterInGhostMails = [];
    namesMembers = [];
    emailMember = '';
    character500 = '';
    character192 = '';

    constructor() {
        this.specialCharactersText = [
            '#"!@-+',
            '@@*/¡??][',
            '[]]@!!|-;?Q&%'
        ];

        this.titles = [
            'alert news !!!',
            'football'
        ];

        this.dates = [
            '2045/12/01'
        ];

        this.hours = [
            '12:00 pm'
        ];

        this.noRegisterInGhostMails = [
            'test@test.com.co'
        ];

        this.character500 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    
        this.character192 = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    
        this.namesMembers = ["Pepe", "Juan"]
        this.emailEmber = "email@email.com"
    }

}