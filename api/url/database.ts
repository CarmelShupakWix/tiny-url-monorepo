import Url from "./url";
import * as mysql from 'mysql';
import * as util from "util";
import logger from "./logger"

export default class Database {

	connection: mysql.Connection;

	constructor() {
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'secret',
			database: 'tiny-url-monorepo'
		});

		connection.connect();

		this.connection = connection;
	}

	async execute(query: string): Promise<Url> {
		logger.info(`executing query ${query} in the database`)
		const mysqlQuery = util.promisify(this.connection.query).bind(this.connection);
		const url: Url = await mysqlQuery(query);

		return url;
	}
}
