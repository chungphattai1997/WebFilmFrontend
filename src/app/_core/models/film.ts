export class film {
    mId: number;
    mTilte: string;
    mTrailer: string;
    mDetail: string;
    mDate_opening: Date;
    mRate: number;
    mImage: string;
    mId_category: number;
    constructor(id: number, title: string, trailer: string, detail: string, date_opening: Date, rate: number, image: string, id_category: number) {
        this.mId = id;
        this.mTilte = title;
        this.mTrailer = trailer;
        this.mDetail = detail;
        this.mDate_opening = date_opening;
        this.mImage = image;
        this.mId_category = id_category;
    }
}