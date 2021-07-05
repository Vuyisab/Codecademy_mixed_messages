console.log(5);

let sentences ={
    pronouns :["Me","You","They","Us","We","I","Them"],
    verbs :["doing","gaming","playing","coding","loving","dying","dieting","love","hate"],
    aux :["as","is","are","will","but","not","am","and"],
    subject  :["Football","Monday","Dad","c++","Fifa","computer science"],

    indeces(){
        let lp = this.pronouns.length -1;
        let lv = this.verbs.length -1;
        let ls = this.subject.length -1;

        let rp = Math.floor(Math.random() * lp);
        let rv = Math.floor(Math.random() * lv);
        let rs = Math.floor(Math.random() * ls);
        return [rp,rv,rs];
    },

    sentence(){
        let arr = this.indeces();
        console.log(arr);
        let word1 = this.pronouns[arr[0]]
        switch (word1){
            case "Me":
                console.log( word1 + " " + this.aux[7] + " " + this.subject[arr[2]]);
                break;
            case "You" || "I":
                let rand = Math.floor(Math.random() * 1);
                console.log(word1 + " " + this.verbs[7 + rand] + " " + this.subject[arr[2]]);
                break; 
            default:
                console.log(this.pronouns[arr[0]] + " " + this.verbs[arr[1]] + " " + this.subject[arr[2]]);
                break;
            
        }
    },

}

//console.log(sentences.indeces());
sentences.sentence();
