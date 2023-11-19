// Task 1
function task1() {
    let Turfirma = {
        name: 'ТролеБрейк',
        address: 'Черкаси',
        phoneNum: '+115344634'
    };

    alert('Туристична Фірма:\nНазва: ' + Turfirma.name + '\nАдреса: ' + Turfirma.address + '\nТелефон: ' + Turfirma.phoneNum);
}

// Task 2
function task2() {
    let ticket = {
        town: 'Краків',
        price: 1200,
        days: 8,

        calculatePrice: function () {
            return this.price * this.days;
        },
        changePrice: function (newPrice) {
            this.price = newPrice;
        },
        displayInfo: function () {
            alert('Місто: ' + this.town + '\nЦіна: ' + this.price + '\nКількість днів: ' + this.days);
        }
    };
    ticket.displayInfo();
    ticket.changePrice(750);
    ticket.days = 5;

    alert('Путівка:\nМісто: ' + ticket.town + '\nЦіна: ' + ticket.price + '\nКількість днів: ' + ticket.days + '\nВартість путівки: ' + ticket.calculatePrice());

}

// Task 3
function task3() {
    let Turfirma = {
        name: 'ТролеБрейк',
        address: 'Черкаси',
        phoneNum: '+115344634'
    };

    let ticket = {
        town: 'Краків',
        price: 750,
        days: 5,

        calculatePrice: function () {
            return this.price * this.days;
        },
        changePrice: function (newPrice) {
            this.price = newPrice;
        },
        displayInfo: function () {
            alert('Місто: ' + this.town + '\nЦіна: ' + this.price + '\nКількість днів: ' + this.days);
        },
    };

    ticket.changePrice(750);
    ticket.days = 5; 
    let combined = { ...Turfirma, ...ticket };

    alert('Туристична Фірма:\nНазва: ' + combined.name + '\nАдреса: ' + combined.address + '\nТелефон: ' + combined.phoneNum + '\nПутівка:' + '\nМісто: ' + combined.town + '\nЦіна: ' + ticket.price + '\nВартість путівки: ' + combined.calculatePrice() + '\nКількість днів: ' + combined.days);
}

// Task 4
function task4() {
    function Turfirma(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    Turfirma.prototype.showData = function () {
        alert('Туристична Фірма:\nНазва: ' + this.name + '\nАдреса: ' + this.address + '\nТелефон: ' + this.phoneNum);
    };

    let travelAgency = new Turfirma('ТролеБрейк', 'Черкаси', '+115344634');
    travelAgency.showData();
}

// Task 5
function task5() {
    function Turfirma(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    Turfirma.prototype.showData = function () {
        alert('Туристична Фірма:\nНазва: ' + this.name + '\nАдреса: ' + this.address + '\nТелефон: ' + this.phoneNum);
    };

    function Viddil(name, address, phoneNum, viddilAdress) {
        Turfirma.call(this, name, address, phoneNum);

        this.viddilAdress = viddilAdress;
    }
    Viddil.prototype = Object.create(Turfirma.prototype);

    Viddil.prototype.showData = function() {
        alert('Відділ:\nНазва: ' + this.name + '\nАдреса: ' + this.address + '\nТелефон: ' + this.phoneNum + '\nАдреса відділу: ' + this.viddilAdress);
    }
    let viddil = new Viddil('ТролеБрейк', 'Черкаси', '+115344634', 'Мазепи 27');
    viddil.showData();
    
}

// Task 6
function task6() {

    class Turfirma {
        constructor(name, address, phoneNum) {
            this._name = name;
            this._address = address;
            this._phoneNum = phoneNum;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get address() {
            return this._address;
        }

        set address(value) {
            this._address = value;
        }

        get phoneNum() {
            return this._phoneNum;
        }

        set phoneNum(value) {
            this._phoneNum = value;
        }

        showData() {
            alert('Туристична Фірма:\nНазва: ' + this._name + '\nАдреса: ' + this._address + '\nТелефон: ' + this._phoneNum);
        }
    }

    class Viddil extends Turfirma {
        constructor(name, address, phoneNum, viddilAdress) {
            super(name, address, phoneNum);
            this._viddilAdress = viddilAdress;
        }

        get viddilAdress() {
            return this._viddilAdress;
        }

        set viddilAdress(value) {
            this._viddilAdress = value;
        }

        showData() {
            super.showData();
            alert('Відділ:\nНазва: ' + this._name + '\nАдреса: ' + this._address + '\nТелефон: ' + this._phoneNum + '\nАдреса відділу: ' + this._viddilAdress);
        }
    }

    let viddil = new Viddil('ТролеБрейк', 'Черкаси', '+115344634', 'Мазепи 27');
    viddil.showData();
}
