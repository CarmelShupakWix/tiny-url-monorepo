import Database from "./database"
import Url from "./url"

export default class Service {

	db: Database

	constructor() {
		this.db = new Database()
	}

	async create(url: Url): Promise<Url> {
		const query = `INSERT INTO url (long_url) VALUES ${url.longUrl}`;
		const createdUrl: Url = await this.db.execute(query);

		return createdUrl;
	}

	async get(shortUrl: string): Promise<Url> {
		const query = `SELECT long_url FROM url WHERE short_url='${shortUrl}'`;
		const url: Url = await this.db.execute(query);

		return url;
	}
}
