export class LangDir {
  public textDir!: string;
  constructor() {
    this.CheckDir();
  }
  public CheckDir(): string {
    localStorage.setItem('lang', 'ar');

    //To make dirction dynamic like creare swicher and value effect on local storage 
    const lang = localStorage.getItem('lang');
    if (lang === 'ar') {
    return  this.textDir = 'rtl';
    } else {
     return this.textDir = 'ltr';
    }
  }
}
