/**
 * An interface that exposes some basic information about the
 * adapter like its name and provider type.
 */
declare interface AdapterInfo {
    readonly provider: Provider;
    readonly adapterName: (typeof officialPrismaAdapters)[number] | (string & {});
}

/**
 * Original `quaint::ValueType` enum tag from Prisma's `quaint`.
 * Query arguments marked with this type are sanitized before being sent to the database.
 * Notice while a query argument may be `null`, `ArgType` is guaranteed to be defined.
 */
declare type ArgType = 'Int32' | 'Int64' | 'Float' | 'Double' | 'Text' | 'Enum' | 'EnumArray' | 'Bytes' | 'Boolean' | 'Char' | 'Array' | 'Numeric' | 'Json' | 'Xml' | 'Uuid' | 'DateTime' | 'Date' | 'Time' | 'Unknown';

declare type ColumnType = (typeof ColumnTypeEnum)[keyof typeof ColumnTypeEnum];

declare const ColumnTypeEnum: {
    readonly Int32: 0;
    readonly Int64: 1;
    readonly Float: 2;
    readonly Double: 3;
    readonly Numeric: 4;
    readonly Boolean: 5;
    readonly Character: 6;
    readonly Text: 7;
    readonly Date: 8;
    readonly Time: 9;
    readonly DateTime: 10;
    readonly Json: 11;
    readonly Enum: 12;
    readonly Bytes: 13;
    readonly Set: 14;
    readonly Uuid: 15;
    readonly Int32Array: 64;
    readonly Int64Array: 65;
    readonly FloatArray: 66;
    readonly DoubleArray: 67;
    readonly NumericArray: 68;
    readonly BooleanArray: 69;
    readonly CharacterArray: 70;
    readonly TextArray: 71;
    readonly DateArray: 72;
    readonly TimeArray: 73;
    readonly DateTimeArray: 74;
    readonly JsonArray: 75;
    readonly EnumArray: 76;
    readonly BytesArray: 77;
    readonly UuidArray: 78;
    readonly UnknownNumber: 128;
};

export declare type ConfigFromFile = {
    resolvedPath: string;
    config: PrismaConfigInternal<any>;
    error?: never;
} | {
    resolvedPath: string;
    config?: never;
    error: LoadConfigFromFileError;
} | {
    resolvedPath: null;
    config: PrismaConfigInternal<any>;
    error?: never;
};

declare type ConnectionInfo = {
    schemaName?: string;
    maxBindValues?: number;
    supportsRelationJoins: boolean;
};

/**
 * This default config can be used as basis for unit and integration tests.
 */
export declare function defaultTestConfig<Env extends Record<string, string | undefined> = never>(): PrismaConfigInternal<Env>;

/**
 * Define the configuration for the Prisma Development Kit.
 */
export declare function defineConfig<Env extends Record<string, string | undefined> = never>(configInput: PrismaConfig<Env>): PrismaConfigInternal<Env>;

/**
 * A generic driver adapter factory that allows the user to instantiate a
 * driver adapter. The query and result types are specific to the adapter.
 */
declare interface DriverAdapterFactory<Query, Result> extends AdapterInfo {
    /**
     * Instantiate a driver adapter.
     */
    connect(): Promise<Queryable<Query, Result>>;
}

declare type EnvVars = Record<string, string | undefined>;

declare type Error_2 = {
    kind: 'GenericJs';
    id: number;
} | {
    kind: 'UnsupportedNativeDataType';
    type: string;
} | {
    kind: 'InvalidIsolationLevel';
    level: string;
} | {
    kind: 'LengthMismatch';
    column?: string;
} | {
    kind: 'UniqueConstraintViolation';
    constraint?: {
        fields: string[];
    } | {
        index: string;
    } | {
        foreignKey: {};
    };
} | {
    kind: 'NullConstraintViolation';
    constraint?: {
        fields: string[];
    } | {
        index: string;
    } | {
        foreignKey: {};
    };
} | {
    kind: 'ForeignKeyConstraintViolation';
    constraint?: {
        fields: string[];
    } | {
        index: string;
    } | {
        foreignKey: {};
    };
} | {
    kind: 'DatabaseDoesNotExist';
    db?: string;
} | {
    kind: 'DatabaseAlreadyExists';
    db?: string;
} | {
    kind: 'DatabaseAccessDenied';
    db?: string;
} | {
    kind: 'AuthenticationFailed';
    user?: string;
} | {
    kind: 'TransactionWriteConflict';
} | {
    kind: 'TableDoesNotExist';
    table?: string;
} | {
    kind: 'ColumnNotFound';
    column?: string;
} | {
    kind: 'TooManyConnections';
    cause: string;
} | {
    kind: 'ValueOutOfRange';
    cause: string;
} | {
    kind: 'MissingFullTextSearchIndex';
} | {
    kind: 'SocketTimeout';
} | {
    kind: 'InconsistentColumnData';
    cause: string;
} | {
    kind: 'TransactionAlreadyClosed';
    cause: string;
} | {
    kind: 'postgres';
    code: string;
    severity: string;
    message: string;
    detail: string | undefined;
    column: string | undefined;
    hint: string | undefined;
} | {
    kind: 'mysql';
    code: number;
    message: string;
    state: string;
} | {
    kind: 'sqlite';
    /**
     * Sqlite extended error code: https://www.sqlite.org/rescode.html
     */
    extendedCode: number;
    message: string;
} | {
    kind: 'mssql';
    code: number;
    message: string;
};

declare type ErrorCapturingFunction<T> = T extends (...args: infer A) => Promise<infer R> ? (...args: A) => Promise<Result<ErrorCapturingInterface<R>>> : T extends (...args: infer A) => infer R ? (...args: A) => Result<ErrorCapturingInterface<R>> : T;

declare type ErrorCapturingInterface<T> = {
    [K in keyof T]: ErrorCapturingFunction<T[K]>;
};

declare interface ErrorCapturingSqlMigrationAwareDriverAdapterFactory extends ErrorCapturingInterface<SqlMigrationAwareDriverAdapterFactory> {
    readonly errorRegistry: ErrorRegistry;
}

declare type ErrorRecord = {
    error: unknown;
};

declare interface ErrorRegistry {
    consumeError(id: number): ErrorRecord | undefined;
}

declare type IsolationLevel = 'READ UNCOMMITTED' | 'READ COMMITTED' | 'REPEATABLE READ' | 'SNAPSHOT' | 'SERIALIZABLE';

/**
 * Load a Prisma config file from the given directory.
 * This function may fail, but it will never throw.
 * The possible error is returned in the result object, so the caller can handle it as needed.
 */
export declare function loadConfigFromFile({ configFile, configRoot, }: LoadConfigFromFileInput): Promise<ConfigFromFile>;

export declare type LoadConfigFromFileError = {
    _tag: 'ConfigFileNotFound';
} | {
    _tag: 'TypeScriptImportFailed';
    error: Error;
} | {
    _tag: 'ConfigFileParseError';
    error: Error;
} | {
    _tag: 'UnknownError';
    error: Error;
};

declare type LoadConfigFromFileInput = {
    /**
     * The path to the config file to load. If not provided, we will attempt to find a config file in the `configRoot` directory.
     */
    configFile?: string;
    /**
     * The directory to search for the config file in. Defaults to the current working directory.
     */
    configRoot?: string;
};

declare const officialPrismaAdapters: readonly ["@prisma/adapter-planetscale", "@prisma/adapter-neon", "@prisma/adapter-libsql", "@prisma/adapter-d1", "@prisma/adapter-pg", "@prisma/adapter-mssql"];

declare const PRISMA_CONFIG_INTERNAL_BRAND: unique symbol;

/**
 * The configuration for the Prisma Development Kit, before it is passed to the `defineConfig` function.
 * Thanks to the branding, this type is opaque and cannot be constructed directly.
 */
export declare type PrismaConfig<Env extends EnvVars = never> = {
    /**
     * Whether features with an unstable API are enabled.
     */
    earlyAccess: true;
    /**
     * The path to the schema file or path to a folder that shall be recursively searched for .prisma files.
     */
    schema?: string;
    /**
     * The configuration for Prisma Studio.
     */
    studio?: PrismaStudioConfigShape<Env>;
    /**
     * The configuration for Prisma Migrate + Introspect
     */
    migrate?: PrismaMigrateConfigShape<Env>;
};

/**
 * The configuration for the Prisma Development Kit, after it has been parsed and processed
 * by the `defineConfig` function.
 * Thanks to the branding, this type is opaque and cannot be constructed directly.
 */
export declare type PrismaConfigInternal<Env extends EnvVars = never> = _PrismaConfigInternal<Env> & {
    __brand: typeof PRISMA_CONFIG_INTERNAL_BRAND;
};

declare type _PrismaConfigInternal<Env extends EnvVars = never> = {
    /**
     * Whether features with an unstable API are enabled.
     */
    earlyAccess: true;
    /**
     * The path to the schema file or path to a folder that shall be recursively searched for .prisma files.
     */
    schema?: string;
    /**
     * The configuration for Prisma Studio.
     */
    studio?: PrismaStudioConfigShape<Env>;
    /**
     * The configuration for Prisma Migrate + Introspect
     */
    migrate?: PrismaMigrateConfigInternalShape<Env>;
    /**
     * The path from where the config was loaded.
     * It's set to `null` if no config file was found and only default config is applied.
     */
    loadedFromFile: string | null;
};

declare type PrismaMigrateConfigInternalShape<Env extends EnvVars = never> = {
    adapter: (env: Env) => Promise<ErrorCapturingSqlMigrationAwareDriverAdapterFactory>;
};

declare type PrismaMigrateConfigShape<Env extends EnvVars = never> = {
    adapter: (env: Env) => Promise<SqlMigrationAwareDriverAdapterFactory>;
};

declare type PrismaStudioConfigShape<Env extends EnvVars = never> = {
    adapter: (env: Env) => Promise<SqlMigrationAwareDriverAdapterFactory>;
};

declare type Provider = 'mysql' | 'postgres' | 'sqlite' | 'sqlserver';

declare interface Queryable<Query, Result> extends AdapterInfo {
    /**
     * Execute a query and return its result.
     */
    queryRaw(params: Query): Promise<Result>;
    /**
     * Execute a query and return the number of affected rows.
     */
    executeRaw(params: Query): Promise<number>;
}

declare type Result<T> = {
    map<U>(fn: (value: T) => U): Result<U>;
    flatMap<U>(fn: (value: T) => Result<U>): Result<U>;
} & ({
    readonly ok: true;
    readonly value: T;
} | {
    readonly ok: false;
    readonly error: Error_2;
});

declare interface SqlDriverAdapter extends SqlQueryable {
    /**
     * Execute multiple SQL statements separated by semicolon.
     */
    executeScript(script: string): Promise<void>;
    /**
     * Start new transaction.
     */
    startTransaction(isolationLevel?: IsolationLevel): Promise<Transaction>;
    /**
     * Optional method that returns extra connection info
     */
    getConnectionInfo?(): ConnectionInfo;
    /**
     * Dispose of the connection and release any resources.
     */
    dispose(): Promise<void>;
}

declare interface SqlDriverAdapterFactory extends DriverAdapterFactory<SqlQuery, SqlResultSet> {
    connect(): Promise<SqlDriverAdapter>;
}

/**
 * An SQL migration adapter that is aware of the notion of a shadow database
 * and can create a connection to it.
 */
declare interface SqlMigrationAwareDriverAdapterFactory extends SqlDriverAdapterFactory {
    connectToShadowDb(): Promise<SqlDriverAdapter>;
}

declare type SqlQuery = {
    sql: string;
    args: Array<unknown>;
    argTypes: Array<ArgType>;
};

declare interface SqlQueryable extends Queryable<SqlQuery, SqlResultSet> {
}

declare interface SqlResultSet {
    /**
     * List of column types appearing in a database query, in the same order as `columnNames`.
     * They are used within the Query Engine to convert values from JS to Quaint values.
     */
    columnTypes: Array<ColumnType>;
    /**
     * List of column names appearing in a database query, in the same order as `columnTypes`.
     */
    columnNames: Array<string>;
    /**
     * List of rows retrieved from a database query.
     * Each row is a list of values, whose length matches `columnNames` and `columnTypes`.
     */
    rows: Array<Array<unknown>>;
    /**
     * The last ID of an `INSERT` statement, if any.
     * This is required for `AUTO_INCREMENT` columns in databases based on MySQL and SQLite.
     */
    lastInsertId?: string;
}

declare interface Transaction extends AdapterInfo, SqlQueryable {
    /**
     * Transaction options.
     */
    readonly options: TransactionOptions;
    /**
     * Commit the transaction.
     */
    commit(): Promise<void>;
    /**
     * Roll back the transaction.
     */
    rollback(): Promise<void>;
}

declare type TransactionOptions = {
    usePhantomQuery: boolean;
};

export { }
