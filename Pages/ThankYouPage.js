import { Selector, t } from "testcafe";

class ThankYouPage{

    constructor(){
        this.Header = Selector('#article-header');
        
    }

}

export default new ThankYouPage();