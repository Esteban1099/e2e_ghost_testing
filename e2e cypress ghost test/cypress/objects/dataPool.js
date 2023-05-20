export class DataPool {

    specialCharactersText = [];
    titles = [];
    dates = [];
    hours = [];

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
    }

}