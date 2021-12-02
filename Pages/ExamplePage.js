import { Selector, t } from "testcafe";

class ExamplePage{

    constructor(){
        this.advancedTraffic = Selector('input#traffic-markup-analysis');
        this.both = Selector('#preferred-interface').child('option').withText('Both');
        this.commandLine = Selector('#preferred-interface').child('option').withText('Command Line');
        this.comments = Selector('textarea#comments');
        this.easyEmbeding = Selector('input#continuous-integration-embedding');
        this.javaScriptAPI = Selector('#preferred-interface').child('option').withText('JavaScript API');
        this.linux = Selector('input#Linux');
        this.macOs = Selector('input#MacOs');
        this.nameInput = Selector('input#developer-name');
        this.populateBtn = Selector('input#populate');
        this.preferredInterface = Selector('select#preferred-interface');
        this.remoteTesting = Selector('input#remote-testing');
        this.reusing = Selector('input#reusing-js-code');
        this.running = Selector('input#background-parallel-testing');
        this.slider = Selector('div#slider');
        this.submitBtn = Selector('button#submit-button');
        this.triedTestCafe = Selector('input#tried-test-cafe');
        this.windows = Selector('input#windows');
    }

    async submit(){
        await t
            .click(this.submitBtn)
    }

    async setComment(comment){
        await t
            .click(this.triedTestCafe)
            .typeText(this.comments,comment)
    }

    async setName(name){
        await t
            .typeText(this.nameInput,name)
    }

    async selectPreferredInterface(option){
        await t
            .click(this.preferredInterface)
            .click(option)
    }

    async selectSliderOption(option){
        await t
            .click(this.triedTestCafe)
            .dragToElement(this.slider,Selector('div').withAttribute('class','slider-value').withExactText(option))
            .speed(0.1)
            
            
    }

    async selectTestCafeOption(option){
        await t
            .click(this.preferredInterface)
            .click(option)
    }

}

export default new ExamplePage();