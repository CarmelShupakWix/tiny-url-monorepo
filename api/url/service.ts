import Database from "./database" 

export default class Service {
	
	db: Database

	constructor() {
		this.db = new Database()
        {

	create(url: Url): Url => {
		const query = "INSERT INTO url VALUES ..."
		this.db.execute(query);

		return url
	} 
}
