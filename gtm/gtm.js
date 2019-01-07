var GtmObject = function () {
    this.gtmObject = true;
};

GtmObject.prototype.createProductData = function (evt) {
    if (this.gtmObject) {
        this.event = evt;
        this.ecommerce = {'currencyCode': $('meta[name="currencySymbol"]').attr('content')};
    }
};

GtmObject.prototype.createGAevent = function (evtCategory, evtAction, evtLabel, evtId) {
    if (this.gtmObject) {
        this.event = 'GAevent';
        this.eventCategory = evtCategory;
        this.eventAction = evtAction;
        this.eventLabel = evtLabel;
        this.eventID = evtId;
    }
};

/*var UsedObject = function (evt, name) {
    GtmObject.call(this);
    this.evt = evt;
    this.name = name;
};

UsedObject.prototype = Object.create(GtmObject.prototype);
UsedObject.prototype.constructor = UsedObject;

var AnotherObject = function (evt) {
    GtmObject.call(this);
    this.evt = evt;
};

AnotherObject.prototype = Object.create(UsedObject.prototype);
AnotherObject.prototype.constructor = AnotherObject;

var DiffObject = function (evt) {
    GtmObject.call(this);
    this.evt = evt;
    this.gtmObject = false;
};

DiffObject.prototype = Object.create(GtmObject.prototype);
DiffObject.prototype.constructor = DiffObject;

var uObj = new UsedObject('event', 'Name');
var aObj = new AnotherObject('event');
var obj = new DiffObject('event');

uObj.createProductData('event');
uObj.createGAevent('categoria', 'azione', 'label', 'id');
aObj.createProductData('event');
aObj.createGAevent('categoria', 'azione', 'label', 'id');
obj.createProductData('event');
//obj.createGAevent('categoria', 'azione', 'label', 'id');*/