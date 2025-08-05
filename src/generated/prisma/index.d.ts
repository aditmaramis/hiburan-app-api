
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model password_resets
 * 
 */
export type password_resets = $Result.DefaultSelection<Prisma.$password_resetsPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model venues
 * 
 */
export type venues = $Result.DefaultSelection<Prisma.$venuesPayload>
/**
 * Model tickets
 * 
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>
/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model coupons
 * 
 */
export type coupons = $Result.DefaultSelection<Prisma.$couponsPayload>
/**
 * Model referral_points
 * 
 */
export type referral_points = $Result.DefaultSelection<Prisma.$referral_pointsPayload>
/**
 * Model prizes
 * 
 */
export type prizes = $Result.DefaultSelection<Prisma.$prizesPayload>
/**
 * Model claimed_prizes
 * 
 */
export type claimed_prizes = $Result.DefaultSelection<Prisma.$claimed_prizesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  customer: 'customer',
  organizer: 'organizer'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_resets`: Exposes CRUD operations for the **password_resets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_resets
    * const password_resets = await prisma.password_resets.findMany()
    * ```
    */
  get password_resets(): Prisma.password_resetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venues`: Exposes CRUD operations for the **venues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venues.findMany()
    * ```
    */
  get venues(): Prisma.venuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupons`: Exposes CRUD operations for the **coupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupons.findMany()
    * ```
    */
  get coupons(): Prisma.couponsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral_points`: Exposes CRUD operations for the **referral_points** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referral_points
    * const referral_points = await prisma.referral_points.findMany()
    * ```
    */
  get referral_points(): Prisma.referral_pointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prizes`: Exposes CRUD operations for the **prizes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prizes
    * const prizes = await prisma.prizes.findMany()
    * ```
    */
  get prizes(): Prisma.prizesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claimed_prizes`: Exposes CRUD operations for the **claimed_prizes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claimed_prizes
    * const claimed_prizes = await prisma.claimed_prizes.findMany()
    * ```
    */
  get claimed_prizes(): Prisma.claimed_prizesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    password_resets: 'password_resets',
    events: 'events',
    venues: 'venues',
    tickets: 'tickets',
    bookings: 'bookings',
    payments: 'payments',
    reviews: 'reviews',
    coupons: 'coupons',
    referral_points: 'referral_points',
    prizes: 'prizes',
    claimed_prizes: 'claimed_prizes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "password_resets" | "events" | "venues" | "tickets" | "bookings" | "payments" | "reviews" | "coupons" | "referral_points" | "prizes" | "claimed_prizes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      password_resets: {
        payload: Prisma.$password_resetsPayload<ExtArgs>
        fields: Prisma.password_resetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_resetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_resetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>
          }
          findFirst: {
            args: Prisma.password_resetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_resetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>
          }
          findMany: {
            args: Prisma.password_resetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>[]
          }
          create: {
            args: Prisma.password_resetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>
          }
          createMany: {
            args: Prisma.password_resetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.password_resetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>[]
          }
          delete: {
            args: Prisma.password_resetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>
          }
          update: {
            args: Prisma.password_resetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>
          }
          deleteMany: {
            args: Prisma.password_resetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_resetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.password_resetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>[]
          }
          upsert: {
            args: Prisma.password_resetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetsPayload>
          }
          aggregate: {
            args: Prisma.Password_resetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_resets>
          }
          groupBy: {
            args: Prisma.password_resetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_resetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_resetsCountArgs<ExtArgs>
            result: $Utils.Optional<Password_resetsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      venues: {
        payload: Prisma.$venuesPayload<ExtArgs>
        fields: Prisma.venuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.venuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.venuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          findFirst: {
            args: Prisma.venuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.venuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          findMany: {
            args: Prisma.venuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>[]
          }
          create: {
            args: Prisma.venuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          createMany: {
            args: Prisma.venuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.venuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>[]
          }
          delete: {
            args: Prisma.venuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          update: {
            args: Prisma.venuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          deleteMany: {
            args: Prisma.venuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.venuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.venuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>[]
          }
          upsert: {
            args: Prisma.venuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuesPayload>
          }
          aggregate: {
            args: Prisma.VenuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenues>
          }
          groupBy: {
            args: Prisma.venuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.venuesCountArgs<ExtArgs>
            result: $Utils.Optional<VenuesCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      coupons: {
        payload: Prisma.$couponsPayload<ExtArgs>
        fields: Prisma.couponsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.couponsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.couponsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          findFirst: {
            args: Prisma.couponsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.couponsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          findMany: {
            args: Prisma.couponsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>[]
          }
          create: {
            args: Prisma.couponsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          createMany: {
            args: Prisma.couponsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.couponsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>[]
          }
          delete: {
            args: Prisma.couponsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          update: {
            args: Prisma.couponsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          deleteMany: {
            args: Prisma.couponsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.couponsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.couponsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>[]
          }
          upsert: {
            args: Prisma.couponsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$couponsPayload>
          }
          aggregate: {
            args: Prisma.CouponsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupons>
          }
          groupBy: {
            args: Prisma.couponsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponsGroupByOutputType>[]
          }
          count: {
            args: Prisma.couponsCountArgs<ExtArgs>
            result: $Utils.Optional<CouponsCountAggregateOutputType> | number
          }
        }
      }
      referral_points: {
        payload: Prisma.$referral_pointsPayload<ExtArgs>
        fields: Prisma.referral_pointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referral_pointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referral_pointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>
          }
          findFirst: {
            args: Prisma.referral_pointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referral_pointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>
          }
          findMany: {
            args: Prisma.referral_pointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>[]
          }
          create: {
            args: Prisma.referral_pointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>
          }
          createMany: {
            args: Prisma.referral_pointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referral_pointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>[]
          }
          delete: {
            args: Prisma.referral_pointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>
          }
          update: {
            args: Prisma.referral_pointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>
          }
          deleteMany: {
            args: Prisma.referral_pointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referral_pointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referral_pointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>[]
          }
          upsert: {
            args: Prisma.referral_pointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referral_pointsPayload>
          }
          aggregate: {
            args: Prisma.Referral_pointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral_points>
          }
          groupBy: {
            args: Prisma.referral_pointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Referral_pointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.referral_pointsCountArgs<ExtArgs>
            result: $Utils.Optional<Referral_pointsCountAggregateOutputType> | number
          }
        }
      }
      prizes: {
        payload: Prisma.$prizesPayload<ExtArgs>
        fields: Prisma.prizesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prizesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prizesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>
          }
          findFirst: {
            args: Prisma.prizesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prizesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>
          }
          findMany: {
            args: Prisma.prizesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>[]
          }
          create: {
            args: Prisma.prizesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>
          }
          createMany: {
            args: Prisma.prizesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prizesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>[]
          }
          delete: {
            args: Prisma.prizesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>
          }
          update: {
            args: Prisma.prizesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>
          }
          deleteMany: {
            args: Prisma.prizesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prizesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prizesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>[]
          }
          upsert: {
            args: Prisma.prizesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prizesPayload>
          }
          aggregate: {
            args: Prisma.PrizesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrizes>
          }
          groupBy: {
            args: Prisma.prizesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrizesGroupByOutputType>[]
          }
          count: {
            args: Prisma.prizesCountArgs<ExtArgs>
            result: $Utils.Optional<PrizesCountAggregateOutputType> | number
          }
        }
      }
      claimed_prizes: {
        payload: Prisma.$claimed_prizesPayload<ExtArgs>
        fields: Prisma.claimed_prizesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.claimed_prizesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.claimed_prizesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>
          }
          findFirst: {
            args: Prisma.claimed_prizesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.claimed_prizesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>
          }
          findMany: {
            args: Prisma.claimed_prizesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>[]
          }
          create: {
            args: Prisma.claimed_prizesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>
          }
          createMany: {
            args: Prisma.claimed_prizesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.claimed_prizesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>[]
          }
          delete: {
            args: Prisma.claimed_prizesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>
          }
          update: {
            args: Prisma.claimed_prizesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>
          }
          deleteMany: {
            args: Prisma.claimed_prizesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.claimed_prizesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.claimed_prizesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>[]
          }
          upsert: {
            args: Prisma.claimed_prizesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimed_prizesPayload>
          }
          aggregate: {
            args: Prisma.Claimed_prizesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimed_prizes>
          }
          groupBy: {
            args: Prisma.claimed_prizesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Claimed_prizesGroupByOutputType>[]
          }
          count: {
            args: Prisma.claimed_prizesCountArgs<ExtArgs>
            result: $Utils.Optional<Claimed_prizesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    password_resets?: password_resetsOmit
    events?: eventsOmit
    venues?: venuesOmit
    tickets?: ticketsOmit
    bookings?: bookingsOmit
    payments?: paymentsOmit
    reviews?: reviewsOmit
    coupons?: couponsOmit
    referral_points?: referral_pointsOmit
    prizes?: prizesOmit
    claimed_prizes?: claimed_prizesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    referred_users: number
    password_resets: number
    events: number
    bookings: number
    reviews: number
    coupons: number
    referral_points: number
    referral_points_referred: number
    claimed_prizes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred_users?: boolean | UsersCountOutputTypeCountReferred_usersArgs
    password_resets?: boolean | UsersCountOutputTypeCountPassword_resetsArgs
    events?: boolean | UsersCountOutputTypeCountEventsArgs
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    coupons?: boolean | UsersCountOutputTypeCountCouponsArgs
    referral_points?: boolean | UsersCountOutputTypeCountReferral_pointsArgs
    referral_points_referred?: boolean | UsersCountOutputTypeCountReferral_points_referredArgs
    claimed_prizes?: boolean | UsersCountOutputTypeCountClaimed_prizesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferred_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPassword_resetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_resetsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: couponsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferral_pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_pointsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferral_points_referredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_pointsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClaimed_prizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimed_prizesWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    bookings: number
    reviews: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | EventsCountOutputTypeCountBookingsArgs
    reviews?: boolean | EventsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }


  /**
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    payments: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Count Type PrizesCountOutputType
   */

  export type PrizesCountOutputType = {
    claimed_prizes: number
  }

  export type PrizesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claimed_prizes?: boolean | PrizesCountOutputTypeCountClaimed_prizesArgs
  }

  // Custom InputTypes
  /**
   * PrizesCountOutputType without action
   */
  export type PrizesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizesCountOutputType
     */
    select?: PrizesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrizesCountOutputType without action
   */
  export type PrizesCountOutputTypeCountClaimed_prizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimed_prizesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    referred_by_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    referred_by_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profile_picture: string | null
    referral_code: string | null
    referred_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profile_picture: string | null
    referral_code: string | null
    referred_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    profile_picture: number
    referral_code: number
    referred_by_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    referred_by_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    referred_by_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    referral_code?: true
    referred_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    referral_code?: true
    referred_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    referral_code?: true
    referred_by_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    profile_picture: string | null
    referral_code: string
    referred_by_id: number | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    referral_code?: boolean
    referred_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    referred_by?: boolean | users$referred_byArgs<ExtArgs>
    referred_users?: boolean | users$referred_usersArgs<ExtArgs>
    password_resets?: boolean | users$password_resetsArgs<ExtArgs>
    events?: boolean | users$eventsArgs<ExtArgs>
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    coupons?: boolean | users$couponsArgs<ExtArgs>
    referral_points?: boolean | users$referral_pointsArgs<ExtArgs>
    referral_points_referred?: boolean | users$referral_points_referredArgs<ExtArgs>
    claimed_prizes?: boolean | users$claimed_prizesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    referral_code?: boolean
    referred_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    referred_by?: boolean | users$referred_byArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    referral_code?: boolean
    referred_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    referred_by?: boolean | users$referred_byArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    referral_code?: boolean
    referred_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "profile_picture" | "referral_code" | "referred_by_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred_by?: boolean | users$referred_byArgs<ExtArgs>
    referred_users?: boolean | users$referred_usersArgs<ExtArgs>
    password_resets?: boolean | users$password_resetsArgs<ExtArgs>
    events?: boolean | users$eventsArgs<ExtArgs>
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    coupons?: boolean | users$couponsArgs<ExtArgs>
    referral_points?: boolean | users$referral_pointsArgs<ExtArgs>
    referral_points_referred?: boolean | users$referral_points_referredArgs<ExtArgs>
    claimed_prizes?: boolean | users$claimed_prizesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred_by?: boolean | users$referred_byArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred_by?: boolean | users$referred_byArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      referred_by: Prisma.$usersPayload<ExtArgs> | null
      referred_users: Prisma.$usersPayload<ExtArgs>[]
      password_resets: Prisma.$password_resetsPayload<ExtArgs>[]
      events: Prisma.$eventsPayload<ExtArgs>[]
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      coupons: Prisma.$couponsPayload<ExtArgs>[]
      referral_points: Prisma.$referral_pointsPayload<ExtArgs>[]
      referral_points_referred: Prisma.$referral_pointsPayload<ExtArgs>[]
      claimed_prizes: Prisma.$claimed_prizesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      role: $Enums.Role
      profile_picture: string | null
      referral_code: string
      referred_by_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referred_by<T extends users$referred_byArgs<ExtArgs> = {}>(args?: Subset<T, users$referred_byArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referred_users<T extends users$referred_usersArgs<ExtArgs> = {}>(args?: Subset<T, users$referred_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    password_resets<T extends users$password_resetsArgs<ExtArgs> = {}>(args?: Subset<T, users$password_resetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends users$eventsArgs<ExtArgs> = {}>(args?: Subset<T, users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends users$couponsArgs<ExtArgs> = {}>(args?: Subset<T, users$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referral_points<T extends users$referral_pointsArgs<ExtArgs> = {}>(args?: Subset<T, users$referral_pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referral_points_referred<T extends users$referral_points_referredArgs<ExtArgs> = {}>(args?: Subset<T, users$referral_points_referredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claimed_prizes<T extends users$claimed_prizesArgs<ExtArgs> = {}>(args?: Subset<T, users$claimed_prizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly profile_picture: FieldRef<"users", 'String'>
    readonly referral_code: FieldRef<"users", 'String'>
    readonly referred_by_id: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.referred_by
   */
  export type users$referred_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * users.referred_users
   */
  export type users$referred_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users.password_resets
   */
  export type users$password_resetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    where?: password_resetsWhereInput
    orderBy?: password_resetsOrderByWithRelationInput | password_resetsOrderByWithRelationInput[]
    cursor?: password_resetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Password_resetsScalarFieldEnum | Password_resetsScalarFieldEnum[]
  }

  /**
   * users.events
   */
  export type users$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.coupons
   */
  export type users$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    where?: couponsWhereInput
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    cursor?: couponsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * users.referral_points
   */
  export type users$referral_pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    where?: referral_pointsWhereInput
    orderBy?: referral_pointsOrderByWithRelationInput | referral_pointsOrderByWithRelationInput[]
    cursor?: referral_pointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Referral_pointsScalarFieldEnum | Referral_pointsScalarFieldEnum[]
  }

  /**
   * users.referral_points_referred
   */
  export type users$referral_points_referredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    where?: referral_pointsWhereInput
    orderBy?: referral_pointsOrderByWithRelationInput | referral_pointsOrderByWithRelationInput[]
    cursor?: referral_pointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Referral_pointsScalarFieldEnum | Referral_pointsScalarFieldEnum[]
  }

  /**
   * users.claimed_prizes
   */
  export type users$claimed_prizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    where?: claimed_prizesWhereInput
    orderBy?: claimed_prizesOrderByWithRelationInput | claimed_prizesOrderByWithRelationInput[]
    cursor?: claimed_prizesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Claimed_prizesScalarFieldEnum | Claimed_prizesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model password_resets
   */

  export type AggregatePassword_resets = {
    _count: Password_resetsCountAggregateOutputType | null
    _avg: Password_resetsAvgAggregateOutputType | null
    _sum: Password_resetsSumAggregateOutputType | null
    _min: Password_resetsMinAggregateOutputType | null
    _max: Password_resetsMaxAggregateOutputType | null
  }

  export type Password_resetsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Password_resetsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Password_resetsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Password_resetsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Password_resetsCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Password_resetsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Password_resetsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Password_resetsMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type Password_resetsMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type Password_resetsCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Password_resetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_resets to aggregate.
     */
    where?: password_resetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetsOrderByWithRelationInput | password_resetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_resetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_resets
    **/
    _count?: true | Password_resetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Password_resetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Password_resetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_resetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_resetsMaxAggregateInputType
  }

  export type GetPassword_resetsAggregateType<T extends Password_resetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_resets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_resets[P]>
      : GetScalarType<T[P], AggregatePassword_resets[P]>
  }




  export type password_resetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_resetsWhereInput
    orderBy?: password_resetsOrderByWithAggregationInput | password_resetsOrderByWithAggregationInput[]
    by: Password_resetsScalarFieldEnum[] | Password_resetsScalarFieldEnum
    having?: password_resetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_resetsCountAggregateInputType | true
    _avg?: Password_resetsAvgAggregateInputType
    _sum?: Password_resetsSumAggregateInputType
    _min?: Password_resetsMinAggregateInputType
    _max?: Password_resetsMaxAggregateInputType
  }

  export type Password_resetsGroupByOutputType = {
    id: number
    user_id: number
    token: string
    expires_at: Date
    created_at: Date
    _count: Password_resetsCountAggregateOutputType | null
    _avg: Password_resetsAvgAggregateOutputType | null
    _sum: Password_resetsSumAggregateOutputType | null
    _min: Password_resetsMinAggregateOutputType | null
    _max: Password_resetsMaxAggregateOutputType | null
  }

  type GetPassword_resetsGroupByPayload<T extends password_resetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_resetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_resetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_resetsGroupByOutputType[P]>
            : GetScalarType<T[P], Password_resetsGroupByOutputType[P]>
        }
      >
    >


  export type password_resetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_resets"]>

  export type password_resetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_resets"]>

  export type password_resetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_resets"]>

  export type password_resetsSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type password_resetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "expires_at" | "created_at", ExtArgs["result"]["password_resets"]>
  export type password_resetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type password_resetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type password_resetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $password_resetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_resets"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      token: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["password_resets"]>
    composites: {}
  }

  type password_resetsGetPayload<S extends boolean | null | undefined | password_resetsDefaultArgs> = $Result.GetResult<Prisma.$password_resetsPayload, S>

  type password_resetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_resetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_resetsCountAggregateInputType | true
    }

  export interface password_resetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_resets'], meta: { name: 'password_resets' } }
    /**
     * Find zero or one Password_resets that matches the filter.
     * @param {password_resetsFindUniqueArgs} args - Arguments to find a Password_resets
     * @example
     * // Get one Password_resets
     * const password_resets = await prisma.password_resets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_resetsFindUniqueArgs>(args: SelectSubset<T, password_resetsFindUniqueArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_resets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_resetsFindUniqueOrThrowArgs} args - Arguments to find a Password_resets
     * @example
     * // Get one Password_resets
     * const password_resets = await prisma.password_resets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_resetsFindUniqueOrThrowArgs>(args: SelectSubset<T, password_resetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_resets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetsFindFirstArgs} args - Arguments to find a Password_resets
     * @example
     * // Get one Password_resets
     * const password_resets = await prisma.password_resets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_resetsFindFirstArgs>(args?: SelectSubset<T, password_resetsFindFirstArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_resets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetsFindFirstOrThrowArgs} args - Arguments to find a Password_resets
     * @example
     * // Get one Password_resets
     * const password_resets = await prisma.password_resets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_resetsFindFirstOrThrowArgs>(args?: SelectSubset<T, password_resetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_resets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_resets
     * const password_resets = await prisma.password_resets.findMany()
     * 
     * // Get first 10 Password_resets
     * const password_resets = await prisma.password_resets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const password_resetsWithIdOnly = await prisma.password_resets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends password_resetsFindManyArgs>(args?: SelectSubset<T, password_resetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_resets.
     * @param {password_resetsCreateArgs} args - Arguments to create a Password_resets.
     * @example
     * // Create one Password_resets
     * const Password_resets = await prisma.password_resets.create({
     *   data: {
     *     // ... data to create a Password_resets
     *   }
     * })
     * 
     */
    create<T extends password_resetsCreateArgs>(args: SelectSubset<T, password_resetsCreateArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_resets.
     * @param {password_resetsCreateManyArgs} args - Arguments to create many Password_resets.
     * @example
     * // Create many Password_resets
     * const password_resets = await prisma.password_resets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_resetsCreateManyArgs>(args?: SelectSubset<T, password_resetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Password_resets and returns the data saved in the database.
     * @param {password_resetsCreateManyAndReturnArgs} args - Arguments to create many Password_resets.
     * @example
     * // Create many Password_resets
     * const password_resets = await prisma.password_resets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Password_resets and only return the `id`
     * const password_resetsWithIdOnly = await prisma.password_resets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends password_resetsCreateManyAndReturnArgs>(args?: SelectSubset<T, password_resetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password_resets.
     * @param {password_resetsDeleteArgs} args - Arguments to delete one Password_resets.
     * @example
     * // Delete one Password_resets
     * const Password_resets = await prisma.password_resets.delete({
     *   where: {
     *     // ... filter to delete one Password_resets
     *   }
     * })
     * 
     */
    delete<T extends password_resetsDeleteArgs>(args: SelectSubset<T, password_resetsDeleteArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_resets.
     * @param {password_resetsUpdateArgs} args - Arguments to update one Password_resets.
     * @example
     * // Update one Password_resets
     * const password_resets = await prisma.password_resets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_resetsUpdateArgs>(args: SelectSubset<T, password_resetsUpdateArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_resets.
     * @param {password_resetsDeleteManyArgs} args - Arguments to filter Password_resets to delete.
     * @example
     * // Delete a few Password_resets
     * const { count } = await prisma.password_resets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_resetsDeleteManyArgs>(args?: SelectSubset<T, password_resetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_resets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_resets
     * const password_resets = await prisma.password_resets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_resetsUpdateManyArgs>(args: SelectSubset<T, password_resetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_resets and returns the data updated in the database.
     * @param {password_resetsUpdateManyAndReturnArgs} args - Arguments to update many Password_resets.
     * @example
     * // Update many Password_resets
     * const password_resets = await prisma.password_resets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Password_resets and only return the `id`
     * const password_resetsWithIdOnly = await prisma.password_resets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends password_resetsUpdateManyAndReturnArgs>(args: SelectSubset<T, password_resetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password_resets.
     * @param {password_resetsUpsertArgs} args - Arguments to update or create a Password_resets.
     * @example
     * // Update or create a Password_resets
     * const password_resets = await prisma.password_resets.upsert({
     *   create: {
     *     // ... data to create a Password_resets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_resets we want to update
     *   }
     * })
     */
    upsert<T extends password_resetsUpsertArgs>(args: SelectSubset<T, password_resetsUpsertArgs<ExtArgs>>): Prisma__password_resetsClient<$Result.GetResult<Prisma.$password_resetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_resets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetsCountArgs} args - Arguments to filter Password_resets to count.
     * @example
     * // Count the number of Password_resets
     * const count = await prisma.password_resets.count({
     *   where: {
     *     // ... the filter for the Password_resets we want to count
     *   }
     * })
    **/
    count<T extends password_resetsCountArgs>(
      args?: Subset<T, password_resetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_resetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_resets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_resetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Password_resetsAggregateArgs>(args: Subset<T, Password_resetsAggregateArgs>): Prisma.PrismaPromise<GetPassword_resetsAggregateType<T>>

    /**
     * Group by Password_resets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends password_resetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_resetsGroupByArgs['orderBy'] }
        : { orderBy?: password_resetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, password_resetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_resetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_resets model
   */
  readonly fields: password_resetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_resets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_resetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the password_resets model
   */
  interface password_resetsFieldRefs {
    readonly id: FieldRef<"password_resets", 'Int'>
    readonly user_id: FieldRef<"password_resets", 'Int'>
    readonly token: FieldRef<"password_resets", 'String'>
    readonly expires_at: FieldRef<"password_resets", 'DateTime'>
    readonly created_at: FieldRef<"password_resets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_resets findUnique
   */
  export type password_resetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * Filter, which password_resets to fetch.
     */
    where: password_resetsWhereUniqueInput
  }

  /**
   * password_resets findUniqueOrThrow
   */
  export type password_resetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * Filter, which password_resets to fetch.
     */
    where: password_resetsWhereUniqueInput
  }

  /**
   * password_resets findFirst
   */
  export type password_resetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * Filter, which password_resets to fetch.
     */
    where?: password_resetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetsOrderByWithRelationInput | password_resetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_resets.
     */
    cursor?: password_resetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_resets.
     */
    distinct?: Password_resetsScalarFieldEnum | Password_resetsScalarFieldEnum[]
  }

  /**
   * password_resets findFirstOrThrow
   */
  export type password_resetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * Filter, which password_resets to fetch.
     */
    where?: password_resetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetsOrderByWithRelationInput | password_resetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_resets.
     */
    cursor?: password_resetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_resets.
     */
    distinct?: Password_resetsScalarFieldEnum | Password_resetsScalarFieldEnum[]
  }

  /**
   * password_resets findMany
   */
  export type password_resetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * Filter, which password_resets to fetch.
     */
    where?: password_resetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetsOrderByWithRelationInput | password_resetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_resets.
     */
    cursor?: password_resetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    distinct?: Password_resetsScalarFieldEnum | Password_resetsScalarFieldEnum[]
  }

  /**
   * password_resets create
   */
  export type password_resetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * The data needed to create a password_resets.
     */
    data: XOR<password_resetsCreateInput, password_resetsUncheckedCreateInput>
  }

  /**
   * password_resets createMany
   */
  export type password_resetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_resets.
     */
    data: password_resetsCreateManyInput | password_resetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_resets createManyAndReturn
   */
  export type password_resetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * The data used to create many password_resets.
     */
    data: password_resetsCreateManyInput | password_resetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_resets update
   */
  export type password_resetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * The data needed to update a password_resets.
     */
    data: XOR<password_resetsUpdateInput, password_resetsUncheckedUpdateInput>
    /**
     * Choose, which password_resets to update.
     */
    where: password_resetsWhereUniqueInput
  }

  /**
   * password_resets updateMany
   */
  export type password_resetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_resets.
     */
    data: XOR<password_resetsUpdateManyMutationInput, password_resetsUncheckedUpdateManyInput>
    /**
     * Filter which password_resets to update
     */
    where?: password_resetsWhereInput
    /**
     * Limit how many password_resets to update.
     */
    limit?: number
  }

  /**
   * password_resets updateManyAndReturn
   */
  export type password_resetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * The data used to update password_resets.
     */
    data: XOR<password_resetsUpdateManyMutationInput, password_resetsUncheckedUpdateManyInput>
    /**
     * Filter which password_resets to update
     */
    where?: password_resetsWhereInput
    /**
     * Limit how many password_resets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_resets upsert
   */
  export type password_resetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * The filter to search for the password_resets to update in case it exists.
     */
    where: password_resetsWhereUniqueInput
    /**
     * In case the password_resets found by the `where` argument doesn't exist, create a new password_resets with this data.
     */
    create: XOR<password_resetsCreateInput, password_resetsUncheckedCreateInput>
    /**
     * In case the password_resets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_resetsUpdateInput, password_resetsUncheckedUpdateInput>
  }

  /**
   * password_resets delete
   */
  export type password_resetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
    /**
     * Filter which password_resets to delete.
     */
    where: password_resetsWhereUniqueInput
  }

  /**
   * password_resets deleteMany
   */
  export type password_resetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_resets to delete
     */
    where?: password_resetsWhereInput
    /**
     * Limit how many password_resets to delete.
     */
    limit?: number
  }

  /**
   * password_resets without action
   */
  export type password_resetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_resets
     */
    select?: password_resetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_resets
     */
    omit?: password_resetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetsInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    total_seats: number | null
    available_seats: number | null
    organizer_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    total_seats: number | null
    available_seats: number | null
    organizer_id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    time: string | null
    location: string | null
    price: Decimal | null
    total_seats: number | null
    available_seats: number | null
    category: string | null
    image: string | null
    organizer_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    time: string | null
    location: string | null
    price: Decimal | null
    total_seats: number | null
    available_seats: number | null
    category: string | null
    image: string | null
    organizer_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    time: number
    location: number
    price: number
    total_seats: number
    available_seats: number
    category: number
    image: number
    organizer_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    price?: true
    total_seats?: true
    available_seats?: true
    organizer_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    price?: true
    total_seats?: true
    available_seats?: true
    organizer_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    time?: true
    location?: true
    price?: true
    total_seats?: true
    available_seats?: true
    category?: true
    image?: true
    organizer_id?: true
    created_at?: true
    updated_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    time?: true
    location?: true
    price?: true
    total_seats?: true
    available_seats?: true
    category?: true
    image?: true
    organizer_id?: true
    created_at?: true
    updated_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    time?: true
    location?: true
    price?: true
    total_seats?: true
    available_seats?: true
    category?: true
    image?: true
    organizer_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    date: Date
    time: string
    location: string
    price: Decimal
    total_seats: number
    available_seats: number
    category: string
    image: string | null
    organizer_id: number
    created_at: Date
    updated_at: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    price?: boolean
    total_seats?: boolean
    available_seats?: boolean
    category?: boolean
    image?: boolean
    organizer_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    organizer?: boolean | usersDefaultArgs<ExtArgs>
    bookings?: boolean | events$bookingsArgs<ExtArgs>
    reviews?: boolean | events$reviewsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    price?: boolean
    total_seats?: boolean
    available_seats?: boolean
    category?: boolean
    image?: boolean
    organizer_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    organizer?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    price?: boolean
    total_seats?: boolean
    available_seats?: boolean
    category?: boolean
    image?: boolean
    organizer_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    organizer?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    price?: boolean
    total_seats?: boolean
    available_seats?: boolean
    category?: boolean
    image?: boolean
    organizer_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "time" | "location" | "price" | "total_seats" | "available_seats" | "category" | "image" | "organizer_id" | "created_at" | "updated_at", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | usersDefaultArgs<ExtArgs>
    bookings?: boolean | events$bookingsArgs<ExtArgs>
    reviews?: boolean | events$reviewsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      organizer: Prisma.$usersPayload<ExtArgs>
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      date: Date
      time: string
      location: string
      price: Prisma.Decimal
      total_seats: number
      available_seats: number
      category: string
      image: string | null
      organizer_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends events$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, events$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends events$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, events$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly title: FieldRef<"events", 'String'>
    readonly description: FieldRef<"events", 'String'>
    readonly date: FieldRef<"events", 'DateTime'>
    readonly time: FieldRef<"events", 'String'>
    readonly location: FieldRef<"events", 'String'>
    readonly price: FieldRef<"events", 'Decimal'>
    readonly total_seats: FieldRef<"events", 'Int'>
    readonly available_seats: FieldRef<"events", 'Int'>
    readonly category: FieldRef<"events", 'String'>
    readonly image: FieldRef<"events", 'String'>
    readonly organizer_id: FieldRef<"events", 'Int'>
    readonly created_at: FieldRef<"events", 'DateTime'>
    readonly updated_at: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events.bookings
   */
  export type events$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * events.reviews
   */
  export type events$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model venues
   */

  export type AggregateVenues = {
    _count: VenuesCountAggregateOutputType | null
    _avg: VenuesAvgAggregateOutputType | null
    _sum: VenuesSumAggregateOutputType | null
    _min: VenuesMinAggregateOutputType | null
    _max: VenuesMaxAggregateOutputType | null
  }

  export type VenuesAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type VenuesSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type VenuesMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    capacity: number | null
    contact_info: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VenuesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    capacity: number | null
    contact_info: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VenuesCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    capacity: number
    contact_info: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VenuesAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type VenuesSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type VenuesMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    capacity?: true
    contact_info?: true
    created_at?: true
    updated_at?: true
  }

  export type VenuesMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    capacity?: true
    contact_info?: true
    created_at?: true
    updated_at?: true
  }

  export type VenuesCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    capacity?: true
    contact_info?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VenuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venues to aggregate.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned venues
    **/
    _count?: true | VenuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenuesMaxAggregateInputType
  }

  export type GetVenuesAggregateType<T extends VenuesAggregateArgs> = {
        [P in keyof T & keyof AggregateVenues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenues[P]>
      : GetScalarType<T[P], AggregateVenues[P]>
  }




  export type venuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: venuesWhereInput
    orderBy?: venuesOrderByWithAggregationInput | venuesOrderByWithAggregationInput[]
    by: VenuesScalarFieldEnum[] | VenuesScalarFieldEnum
    having?: venuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenuesCountAggregateInputType | true
    _avg?: VenuesAvgAggregateInputType
    _sum?: VenuesSumAggregateInputType
    _min?: VenuesMinAggregateInputType
    _max?: VenuesMaxAggregateInputType
  }

  export type VenuesGroupByOutputType = {
    id: number
    name: string
    address: string | null
    city: string
    capacity: number
    contact_info: string | null
    created_at: Date
    updated_at: Date
    _count: VenuesCountAggregateOutputType | null
    _avg: VenuesAvgAggregateOutputType | null
    _sum: VenuesSumAggregateOutputType | null
    _min: VenuesMinAggregateOutputType | null
    _max: VenuesMaxAggregateOutputType | null
  }

  type GetVenuesGroupByPayload<T extends venuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenuesGroupByOutputType[P]>
            : GetScalarType<T[P], VenuesGroupByOutputType[P]>
        }
      >
    >


  export type venuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    capacity?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type venuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    capacity?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type venuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    capacity?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type venuesSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    capacity?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type venuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "capacity" | "contact_info" | "created_at" | "updated_at", ExtArgs["result"]["venues"]>

  export type $venuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "venues"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      city: string
      capacity: number
      contact_info: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["venues"]>
    composites: {}
  }

  type venuesGetPayload<S extends boolean | null | undefined | venuesDefaultArgs> = $Result.GetResult<Prisma.$venuesPayload, S>

  type venuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<venuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenuesCountAggregateInputType | true
    }

  export interface venuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['venues'], meta: { name: 'venues' } }
    /**
     * Find zero or one Venues that matches the filter.
     * @param {venuesFindUniqueArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends venuesFindUniqueArgs>(args: SelectSubset<T, venuesFindUniqueArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {venuesFindUniqueOrThrowArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends venuesFindUniqueOrThrowArgs>(args: SelectSubset<T, venuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesFindFirstArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends venuesFindFirstArgs>(args?: SelectSubset<T, venuesFindFirstArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesFindFirstOrThrowArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends venuesFindFirstOrThrowArgs>(args?: SelectSubset<T, venuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venues.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venuesWithIdOnly = await prisma.venues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends venuesFindManyArgs>(args?: SelectSubset<T, venuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venues.
     * @param {venuesCreateArgs} args - Arguments to create a Venues.
     * @example
     * // Create one Venues
     * const Venues = await prisma.venues.create({
     *   data: {
     *     // ... data to create a Venues
     *   }
     * })
     * 
     */
    create<T extends venuesCreateArgs>(args: SelectSubset<T, venuesCreateArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {venuesCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venues = await prisma.venues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends venuesCreateManyArgs>(args?: SelectSubset<T, venuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {venuesCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venues = await prisma.venues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venuesWithIdOnly = await prisma.venues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends venuesCreateManyAndReturnArgs>(args?: SelectSubset<T, venuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venues.
     * @param {venuesDeleteArgs} args - Arguments to delete one Venues.
     * @example
     * // Delete one Venues
     * const Venues = await prisma.venues.delete({
     *   where: {
     *     // ... filter to delete one Venues
     *   }
     * })
     * 
     */
    delete<T extends venuesDeleteArgs>(args: SelectSubset<T, venuesDeleteArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venues.
     * @param {venuesUpdateArgs} args - Arguments to update one Venues.
     * @example
     * // Update one Venues
     * const venues = await prisma.venues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends venuesUpdateArgs>(args: SelectSubset<T, venuesUpdateArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {venuesDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends venuesDeleteManyArgs>(args?: SelectSubset<T, venuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venues = await prisma.venues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends venuesUpdateManyArgs>(args: SelectSubset<T, venuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {venuesUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venues = await prisma.venues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venuesWithIdOnly = await prisma.venues.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends venuesUpdateManyAndReturnArgs>(args: SelectSubset<T, venuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venues.
     * @param {venuesUpsertArgs} args - Arguments to update or create a Venues.
     * @example
     * // Update or create a Venues
     * const venues = await prisma.venues.upsert({
     *   create: {
     *     // ... data to create a Venues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venues we want to update
     *   }
     * })
     */
    upsert<T extends venuesUpsertArgs>(args: SelectSubset<T, venuesUpsertArgs<ExtArgs>>): Prisma__venuesClient<$Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venues.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends venuesCountArgs>(
      args?: Subset<T, venuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenuesAggregateArgs>(args: Subset<T, VenuesAggregateArgs>): Prisma.PrismaPromise<GetVenuesAggregateType<T>>

    /**
     * Group by Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends venuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: venuesGroupByArgs['orderBy'] }
        : { orderBy?: venuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, venuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the venues model
   */
  readonly fields: venuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for venues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__venuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the venues model
   */
  interface venuesFieldRefs {
    readonly id: FieldRef<"venues", 'Int'>
    readonly name: FieldRef<"venues", 'String'>
    readonly address: FieldRef<"venues", 'String'>
    readonly city: FieldRef<"venues", 'String'>
    readonly capacity: FieldRef<"venues", 'Int'>
    readonly contact_info: FieldRef<"venues", 'String'>
    readonly created_at: FieldRef<"venues", 'DateTime'>
    readonly updated_at: FieldRef<"venues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * venues findUnique
   */
  export type venuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues findUniqueOrThrow
   */
  export type venuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues findFirst
   */
  export type venuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venues.
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * venues findFirstOrThrow
   */
  export type venuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venues.
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * venues findMany
   */
  export type venuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venuesOrderByWithRelationInput | venuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing venues.
     */
    cursor?: venuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * venues create
   */
  export type venuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data needed to create a venues.
     */
    data: XOR<venuesCreateInput, venuesUncheckedCreateInput>
  }

  /**
   * venues createMany
   */
  export type venuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many venues.
     */
    data: venuesCreateManyInput | venuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * venues createManyAndReturn
   */
  export type venuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data used to create many venues.
     */
    data: venuesCreateManyInput | venuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * venues update
   */
  export type venuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data needed to update a venues.
     */
    data: XOR<venuesUpdateInput, venuesUncheckedUpdateInput>
    /**
     * Choose, which venues to update.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues updateMany
   */
  export type venuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update venues.
     */
    data: XOR<venuesUpdateManyMutationInput, venuesUncheckedUpdateManyInput>
    /**
     * Filter which venues to update
     */
    where?: venuesWhereInput
    /**
     * Limit how many venues to update.
     */
    limit?: number
  }

  /**
   * venues updateManyAndReturn
   */
  export type venuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The data used to update venues.
     */
    data: XOR<venuesUpdateManyMutationInput, venuesUncheckedUpdateManyInput>
    /**
     * Filter which venues to update
     */
    where?: venuesWhereInput
    /**
     * Limit how many venues to update.
     */
    limit?: number
  }

  /**
   * venues upsert
   */
  export type venuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * The filter to search for the venues to update in case it exists.
     */
    where: venuesWhereUniqueInput
    /**
     * In case the venues found by the `where` argument doesn't exist, create a new venues with this data.
     */
    create: XOR<venuesCreateInput, venuesUncheckedCreateInput>
    /**
     * In case the venues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<venuesUpdateInput, venuesUncheckedUpdateInput>
  }

  /**
   * venues delete
   */
  export type venuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
    /**
     * Filter which venues to delete.
     */
    where: venuesWhereUniqueInput
  }

  /**
   * venues deleteMany
   */
  export type venuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venues to delete
     */
    where?: venuesWhereInput
    /**
     * Limit how many venues to delete.
     */
    limit?: number
  }

  /**
   * venues without action
   */
  export type venuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venues
     */
    select?: venuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venues
     */
    omit?: venuesOmit<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quantity: number | null
  }

  export type TicketsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quantity: number | null
  }

  export type TicketsMinAggregateOutputType = {
    id: number | null
    type: string | null
    price: Decimal | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    id: number | null
    type: string | null
    price: Decimal | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    id: number
    type: number
    price: number
    quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
  }

  export type TicketsSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
  }

  export type TicketsMinAggregateInputType = {
    id?: true
    type?: true
    price?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type TicketsMaxAggregateInputType = {
    id?: true
    type?: true
    price?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type TicketsCountAggregateInputType = {
    id?: true
    type?: true
    price?: true
    quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    id: number
    type: string
    price: Decimal
    quantity: number
    created_at: Date
    updated_at: Date
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectScalar = {
    id?: boolean
    type?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "price" | "quantity" | "created_at" | "updated_at", ExtArgs["result"]["tickets"]>

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      price: Prisma.Decimal
      quantity: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketsWithIdOnly = await prisma.tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketsCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {ticketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ticketsUpdateManyAndReturnArgs>(args: SelectSubset<T, ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tickets model
   */
  interface ticketsFieldRefs {
    readonly id: FieldRef<"tickets", 'Int'>
    readonly type: FieldRef<"tickets", 'String'>
    readonly price: FieldRef<"tickets", 'Decimal'>
    readonly quantity: FieldRef<"tickets", 'Int'>
    readonly created_at: FieldRef<"tickets", 'DateTime'>
    readonly updated_at: FieldRef<"tickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets createManyAndReturn
   */
  export type ticketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets updateManyAndReturn
   */
  export type ticketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
  }


  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type BookingsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    quantity: number | null
    total_price: Decimal | null
    booking_date: Date | null
    status: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    quantity: number | null
    total_price: Decimal | null
    booking_date: Date | null
    status: string | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    quantity: number
    total_price: number
    booking_date: number
    status: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    quantity?: true
    total_price?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    quantity?: true
    total_price?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    quantity?: true
    total_price?: true
    booking_date?: true
    status?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    quantity?: true
    total_price?: true
    booking_date?: true
    status?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    quantity?: true
    total_price?: true
    booking_date?: true
    status?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: number
    user_id: number
    event_id: number
    quantity: number
    total_price: Decimal
    booking_date: Date
    status: string
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    quantity?: boolean
    total_price?: boolean
    booking_date?: boolean
    status?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    event?: boolean | eventsDefaultArgs<ExtArgs>
    payments?: boolean | bookings$paymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    quantity?: boolean
    total_price?: boolean
    booking_date?: boolean
    status?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    event?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    quantity?: boolean
    total_price?: boolean
    booking_date?: boolean
    status?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    event?: boolean | eventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    quantity?: boolean
    total_price?: boolean
    booking_date?: boolean
    status?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "quantity" | "total_price" | "booking_date" | "status", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    event?: boolean | eventsDefaultArgs<ExtArgs>
    payments?: boolean | bookings$paymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    event?: boolean | eventsDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    event?: boolean | eventsDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      event: Prisma.$eventsPayload<ExtArgs>
      payments: Prisma.$paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number
      quantity: number
      total_price: Prisma.Decimal
      booking_date: Date
      status: string
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends bookings$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'Int'>
    readonly user_id: FieldRef<"bookings", 'Int'>
    readonly event_id: FieldRef<"bookings", 'Int'>
    readonly quantity: FieldRef<"bookings", 'Int'>
    readonly total_price: FieldRef<"bookings", 'Decimal'>
    readonly booking_date: FieldRef<"bookings", 'DateTime'>
    readonly status: FieldRef<"bookings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.payments
   */
  export type bookings$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
    payment_method: string | null
    payment_date: Date | null
    status: string | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
    payment_method: string | null
    payment_date: Date | null
    status: string | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    booking_id: number
    amount: number
    payment_method: number
    payment_date: number
    status: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    status?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    status?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    status?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    booking_id: number
    amount: Decimal
    payment_method: string
    payment_date: Date
    status: string
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    booking?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    booking?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    booking?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "amount" | "payment_method" | "payment_date" | "status", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingsDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      booking: Prisma.$bookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      booking_id: number
      amount: Prisma.Decimal
      payment_method: string
      payment_date: Date
      status: string
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly booking_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly payment_date: FieldRef<"payments", 'DateTime'>
    readonly status: FieldRef<"payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    event_id: number
    user_id: number
    rating: number
    comment: string | null
    created_at: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    event?: boolean | eventsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    event?: boolean | eventsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    event?: boolean | eventsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      event: Prisma.$eventsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      user_id: number
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly event_id: FieldRef<"reviews", 'Int'>
    readonly user_id: FieldRef<"reviews", 'Int'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly comment: FieldRef<"reviews", 'String'>
    readonly created_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model coupons
   */

  export type AggregateCoupons = {
    _count: CouponsCountAggregateOutputType | null
    _avg: CouponsAvgAggregateOutputType | null
    _sum: CouponsSumAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  export type CouponsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    discount_percent: number | null
  }

  export type CouponsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    discount_percent: number | null
  }

  export type CouponsMinAggregateOutputType = {
    id: number | null
    code: string | null
    user_id: number | null
    discount_percent: number | null
    issued_at: Date | null
    expires_at: Date | null
    is_used: boolean | null
    source: string | null
  }

  export type CouponsMaxAggregateOutputType = {
    id: number | null
    code: string | null
    user_id: number | null
    discount_percent: number | null
    issued_at: Date | null
    expires_at: Date | null
    is_used: boolean | null
    source: string | null
  }

  export type CouponsCountAggregateOutputType = {
    id: number
    code: number
    user_id: number
    discount_percent: number
    issued_at: number
    expires_at: number
    is_used: number
    source: number
    _all: number
  }


  export type CouponsAvgAggregateInputType = {
    id?: true
    user_id?: true
    discount_percent?: true
  }

  export type CouponsSumAggregateInputType = {
    id?: true
    user_id?: true
    discount_percent?: true
  }

  export type CouponsMinAggregateInputType = {
    id?: true
    code?: true
    user_id?: true
    discount_percent?: true
    issued_at?: true
    expires_at?: true
    is_used?: true
    source?: true
  }

  export type CouponsMaxAggregateInputType = {
    id?: true
    code?: true
    user_id?: true
    discount_percent?: true
    issued_at?: true
    expires_at?: true
    is_used?: true
    source?: true
  }

  export type CouponsCountAggregateInputType = {
    id?: true
    code?: true
    user_id?: true
    discount_percent?: true
    issued_at?: true
    expires_at?: true
    is_used?: true
    source?: true
    _all?: true
  }

  export type CouponsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coupons to aggregate.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coupons
    **/
    _count?: true | CouponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponsMaxAggregateInputType
  }

  export type GetCouponsAggregateType<T extends CouponsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupons[P]>
      : GetScalarType<T[P], AggregateCoupons[P]>
  }




  export type couponsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: couponsWhereInput
    orderBy?: couponsOrderByWithAggregationInput | couponsOrderByWithAggregationInput[]
    by: CouponsScalarFieldEnum[] | CouponsScalarFieldEnum
    having?: couponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponsCountAggregateInputType | true
    _avg?: CouponsAvgAggregateInputType
    _sum?: CouponsSumAggregateInputType
    _min?: CouponsMinAggregateInputType
    _max?: CouponsMaxAggregateInputType
  }

  export type CouponsGroupByOutputType = {
    id: number
    code: string
    user_id: number
    discount_percent: number
    issued_at: Date
    expires_at: Date
    is_used: boolean
    source: string | null
    _count: CouponsCountAggregateOutputType | null
    _avg: CouponsAvgAggregateOutputType | null
    _sum: CouponsSumAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  type GetCouponsGroupByPayload<T extends couponsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponsGroupByOutputType[P]>
            : GetScalarType<T[P], CouponsGroupByOutputType[P]>
        }
      >
    >


  export type couponsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    user_id?: boolean
    discount_percent?: boolean
    issued_at?: boolean
    expires_at?: boolean
    is_used?: boolean
    source?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupons"]>

  export type couponsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    user_id?: boolean
    discount_percent?: boolean
    issued_at?: boolean
    expires_at?: boolean
    is_used?: boolean
    source?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupons"]>

  export type couponsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    user_id?: boolean
    discount_percent?: boolean
    issued_at?: boolean
    expires_at?: boolean
    is_used?: boolean
    source?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupons"]>

  export type couponsSelectScalar = {
    id?: boolean
    code?: boolean
    user_id?: boolean
    discount_percent?: boolean
    issued_at?: boolean
    expires_at?: boolean
    is_used?: boolean
    source?: boolean
  }

  export type couponsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "user_id" | "discount_percent" | "issued_at" | "expires_at" | "is_used" | "source", ExtArgs["result"]["coupons"]>
  export type couponsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type couponsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type couponsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $couponsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "coupons"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      user_id: number
      discount_percent: number
      issued_at: Date
      expires_at: Date
      is_used: boolean
      source: string | null
    }, ExtArgs["result"]["coupons"]>
    composites: {}
  }

  type couponsGetPayload<S extends boolean | null | undefined | couponsDefaultArgs> = $Result.GetResult<Prisma.$couponsPayload, S>

  type couponsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<couponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponsCountAggregateInputType | true
    }

  export interface couponsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['coupons'], meta: { name: 'coupons' } }
    /**
     * Find zero or one Coupons that matches the filter.
     * @param {couponsFindUniqueArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends couponsFindUniqueArgs>(args: SelectSubset<T, couponsFindUniqueArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {couponsFindUniqueOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends couponsFindUniqueOrThrowArgs>(args: SelectSubset<T, couponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindFirstArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends couponsFindFirstArgs>(args?: SelectSubset<T, couponsFindFirstArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindFirstOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends couponsFindFirstOrThrowArgs>(args?: SelectSubset<T, couponsFindFirstOrThrowArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupons.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponsWithIdOnly = await prisma.coupons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends couponsFindManyArgs>(args?: SelectSubset<T, couponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupons.
     * @param {couponsCreateArgs} args - Arguments to create a Coupons.
     * @example
     * // Create one Coupons
     * const Coupons = await prisma.coupons.create({
     *   data: {
     *     // ... data to create a Coupons
     *   }
     * })
     * 
     */
    create<T extends couponsCreateArgs>(args: SelectSubset<T, couponsCreateArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {couponsCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupons = await prisma.coupons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends couponsCreateManyArgs>(args?: SelectSubset<T, couponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {couponsCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupons = await prisma.coupons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponsWithIdOnly = await prisma.coupons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends couponsCreateManyAndReturnArgs>(args?: SelectSubset<T, couponsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupons.
     * @param {couponsDeleteArgs} args - Arguments to delete one Coupons.
     * @example
     * // Delete one Coupons
     * const Coupons = await prisma.coupons.delete({
     *   where: {
     *     // ... filter to delete one Coupons
     *   }
     * })
     * 
     */
    delete<T extends couponsDeleteArgs>(args: SelectSubset<T, couponsDeleteArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupons.
     * @param {couponsUpdateArgs} args - Arguments to update one Coupons.
     * @example
     * // Update one Coupons
     * const coupons = await prisma.coupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends couponsUpdateArgs>(args: SelectSubset<T, couponsUpdateArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {couponsDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends couponsDeleteManyArgs>(args?: SelectSubset<T, couponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends couponsUpdateManyArgs>(args: SelectSubset<T, couponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {couponsUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `id`
     * const couponsWithIdOnly = await prisma.coupons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends couponsUpdateManyAndReturnArgs>(args: SelectSubset<T, couponsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupons.
     * @param {couponsUpsertArgs} args - Arguments to update or create a Coupons.
     * @example
     * // Update or create a Coupons
     * const coupons = await prisma.coupons.upsert({
     *   create: {
     *     // ... data to create a Coupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupons we want to update
     *   }
     * })
     */
    upsert<T extends couponsUpsertArgs>(args: SelectSubset<T, couponsUpsertArgs<ExtArgs>>): Prisma__couponsClient<$Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupons.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends couponsCountArgs>(
      args?: Subset<T, couponsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponsAggregateArgs>(args: Subset<T, CouponsAggregateArgs>): Prisma.PrismaPromise<GetCouponsAggregateType<T>>

    /**
     * Group by Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends couponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: couponsGroupByArgs['orderBy'] }
        : { orderBy?: couponsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, couponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the coupons model
   */
  readonly fields: couponsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for coupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__couponsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the coupons model
   */
  interface couponsFieldRefs {
    readonly id: FieldRef<"coupons", 'Int'>
    readonly code: FieldRef<"coupons", 'String'>
    readonly user_id: FieldRef<"coupons", 'Int'>
    readonly discount_percent: FieldRef<"coupons", 'Int'>
    readonly issued_at: FieldRef<"coupons", 'DateTime'>
    readonly expires_at: FieldRef<"coupons", 'DateTime'>
    readonly is_used: FieldRef<"coupons", 'Boolean'>
    readonly source: FieldRef<"coupons", 'String'>
  }
    

  // Custom InputTypes
  /**
   * coupons findUnique
   */
  export type couponsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons findUniqueOrThrow
   */
  export type couponsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons findFirst
   */
  export type couponsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     */
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * coupons findFirstOrThrow
   */
  export type couponsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     */
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * coupons findMany
   */
  export type couponsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponsOrderByWithRelationInput | couponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coupons.
     */
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * coupons create
   */
  export type couponsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * The data needed to create a coupons.
     */
    data: XOR<couponsCreateInput, couponsUncheckedCreateInput>
  }

  /**
   * coupons createMany
   */
  export type couponsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many coupons.
     */
    data: couponsCreateManyInput | couponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * coupons createManyAndReturn
   */
  export type couponsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * The data used to create many coupons.
     */
    data: couponsCreateManyInput | couponsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * coupons update
   */
  export type couponsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * The data needed to update a coupons.
     */
    data: XOR<couponsUpdateInput, couponsUncheckedUpdateInput>
    /**
     * Choose, which coupons to update.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons updateMany
   */
  export type couponsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update coupons.
     */
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyInput>
    /**
     * Filter which coupons to update
     */
    where?: couponsWhereInput
    /**
     * Limit how many coupons to update.
     */
    limit?: number
  }

  /**
   * coupons updateManyAndReturn
   */
  export type couponsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * The data used to update coupons.
     */
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyInput>
    /**
     * Filter which coupons to update
     */
    where?: couponsWhereInput
    /**
     * Limit how many coupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * coupons upsert
   */
  export type couponsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * The filter to search for the coupons to update in case it exists.
     */
    where: couponsWhereUniqueInput
    /**
     * In case the coupons found by the `where` argument doesn't exist, create a new coupons with this data.
     */
    create: XOR<couponsCreateInput, couponsUncheckedCreateInput>
    /**
     * In case the coupons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<couponsUpdateInput, couponsUncheckedUpdateInput>
  }

  /**
   * coupons delete
   */
  export type couponsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
    /**
     * Filter which coupons to delete.
     */
    where: couponsWhereUniqueInput
  }

  /**
   * coupons deleteMany
   */
  export type couponsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coupons to delete
     */
    where?: couponsWhereInput
    /**
     * Limit how many coupons to delete.
     */
    limit?: number
  }

  /**
   * coupons without action
   */
  export type couponsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupons
     */
    select?: couponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coupons
     */
    omit?: couponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: couponsInclude<ExtArgs> | null
  }


  /**
   * Model referral_points
   */

  export type AggregateReferral_points = {
    _count: Referral_pointsCountAggregateOutputType | null
    _avg: Referral_pointsAvgAggregateOutputType | null
    _sum: Referral_pointsSumAggregateOutputType | null
    _min: Referral_pointsMinAggregateOutputType | null
    _max: Referral_pointsMaxAggregateOutputType | null
  }

  export type Referral_pointsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    points: number | null
    referred_user_id: number | null
  }

  export type Referral_pointsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    points: number | null
    referred_user_id: number | null
  }

  export type Referral_pointsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    points: number | null
    earned_at: Date | null
    expires_at: Date | null
    used: boolean | null
    referred_user_id: number | null
  }

  export type Referral_pointsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    points: number | null
    earned_at: Date | null
    expires_at: Date | null
    used: boolean | null
    referred_user_id: number | null
  }

  export type Referral_pointsCountAggregateOutputType = {
    id: number
    user_id: number
    points: number
    earned_at: number
    expires_at: number
    used: number
    referred_user_id: number
    _all: number
  }


  export type Referral_pointsAvgAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    referred_user_id?: true
  }

  export type Referral_pointsSumAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    referred_user_id?: true
  }

  export type Referral_pointsMinAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    earned_at?: true
    expires_at?: true
    used?: true
    referred_user_id?: true
  }

  export type Referral_pointsMaxAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    earned_at?: true
    expires_at?: true
    used?: true
    referred_user_id?: true
  }

  export type Referral_pointsCountAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    earned_at?: true
    expires_at?: true
    used?: true
    referred_user_id?: true
    _all?: true
  }

  export type Referral_pointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_points to aggregate.
     */
    where?: referral_pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_points to fetch.
     */
    orderBy?: referral_pointsOrderByWithRelationInput | referral_pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referral_pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referral_points
    **/
    _count?: true | Referral_pointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Referral_pointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Referral_pointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Referral_pointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Referral_pointsMaxAggregateInputType
  }

  export type GetReferral_pointsAggregateType<T extends Referral_pointsAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral_points]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral_points[P]>
      : GetScalarType<T[P], AggregateReferral_points[P]>
  }




  export type referral_pointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referral_pointsWhereInput
    orderBy?: referral_pointsOrderByWithAggregationInput | referral_pointsOrderByWithAggregationInput[]
    by: Referral_pointsScalarFieldEnum[] | Referral_pointsScalarFieldEnum
    having?: referral_pointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Referral_pointsCountAggregateInputType | true
    _avg?: Referral_pointsAvgAggregateInputType
    _sum?: Referral_pointsSumAggregateInputType
    _min?: Referral_pointsMinAggregateInputType
    _max?: Referral_pointsMaxAggregateInputType
  }

  export type Referral_pointsGroupByOutputType = {
    id: number
    user_id: number
    points: number
    earned_at: Date
    expires_at: Date
    used: boolean
    referred_user_id: number
    _count: Referral_pointsCountAggregateOutputType | null
    _avg: Referral_pointsAvgAggregateOutputType | null
    _sum: Referral_pointsSumAggregateOutputType | null
    _min: Referral_pointsMinAggregateOutputType | null
    _max: Referral_pointsMaxAggregateOutputType | null
  }

  type GetReferral_pointsGroupByPayload<T extends referral_pointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Referral_pointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Referral_pointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Referral_pointsGroupByOutputType[P]>
            : GetScalarType<T[P], Referral_pointsGroupByOutputType[P]>
        }
      >
    >


  export type referral_pointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    points?: boolean
    earned_at?: boolean
    expires_at?: boolean
    used?: boolean
    referred_user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    referred_user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_points"]>

  export type referral_pointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    points?: boolean
    earned_at?: boolean
    expires_at?: boolean
    used?: boolean
    referred_user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    referred_user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_points"]>

  export type referral_pointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    points?: boolean
    earned_at?: boolean
    expires_at?: boolean
    used?: boolean
    referred_user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    referred_user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral_points"]>

  export type referral_pointsSelectScalar = {
    id?: boolean
    user_id?: boolean
    points?: boolean
    earned_at?: boolean
    expires_at?: boolean
    used?: boolean
    referred_user_id?: boolean
  }

  export type referral_pointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "points" | "earned_at" | "expires_at" | "used" | "referred_user_id", ExtArgs["result"]["referral_points"]>
  export type referral_pointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    referred_user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type referral_pointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    referred_user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type referral_pointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    referred_user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $referral_pointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referral_points"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      referred_user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      points: number
      earned_at: Date
      expires_at: Date
      used: boolean
      referred_user_id: number
    }, ExtArgs["result"]["referral_points"]>
    composites: {}
  }

  type referral_pointsGetPayload<S extends boolean | null | undefined | referral_pointsDefaultArgs> = $Result.GetResult<Prisma.$referral_pointsPayload, S>

  type referral_pointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referral_pointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Referral_pointsCountAggregateInputType | true
    }

  export interface referral_pointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referral_points'], meta: { name: 'referral_points' } }
    /**
     * Find zero or one Referral_points that matches the filter.
     * @param {referral_pointsFindUniqueArgs} args - Arguments to find a Referral_points
     * @example
     * // Get one Referral_points
     * const referral_points = await prisma.referral_points.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referral_pointsFindUniqueArgs>(args: SelectSubset<T, referral_pointsFindUniqueArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral_points that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referral_pointsFindUniqueOrThrowArgs} args - Arguments to find a Referral_points
     * @example
     * // Get one Referral_points
     * const referral_points = await prisma.referral_points.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referral_pointsFindUniqueOrThrowArgs>(args: SelectSubset<T, referral_pointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_pointsFindFirstArgs} args - Arguments to find a Referral_points
     * @example
     * // Get one Referral_points
     * const referral_points = await prisma.referral_points.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referral_pointsFindFirstArgs>(args?: SelectSubset<T, referral_pointsFindFirstArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral_points that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_pointsFindFirstOrThrowArgs} args - Arguments to find a Referral_points
     * @example
     * // Get one Referral_points
     * const referral_points = await prisma.referral_points.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referral_pointsFindFirstOrThrowArgs>(args?: SelectSubset<T, referral_pointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referral_points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_pointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referral_points
     * const referral_points = await prisma.referral_points.findMany()
     * 
     * // Get first 10 Referral_points
     * const referral_points = await prisma.referral_points.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referral_pointsWithIdOnly = await prisma.referral_points.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referral_pointsFindManyArgs>(args?: SelectSubset<T, referral_pointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral_points.
     * @param {referral_pointsCreateArgs} args - Arguments to create a Referral_points.
     * @example
     * // Create one Referral_points
     * const Referral_points = await prisma.referral_points.create({
     *   data: {
     *     // ... data to create a Referral_points
     *   }
     * })
     * 
     */
    create<T extends referral_pointsCreateArgs>(args: SelectSubset<T, referral_pointsCreateArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referral_points.
     * @param {referral_pointsCreateManyArgs} args - Arguments to create many Referral_points.
     * @example
     * // Create many Referral_points
     * const referral_points = await prisma.referral_points.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referral_pointsCreateManyArgs>(args?: SelectSubset<T, referral_pointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referral_points and returns the data saved in the database.
     * @param {referral_pointsCreateManyAndReturnArgs} args - Arguments to create many Referral_points.
     * @example
     * // Create many Referral_points
     * const referral_points = await prisma.referral_points.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referral_points and only return the `id`
     * const referral_pointsWithIdOnly = await prisma.referral_points.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referral_pointsCreateManyAndReturnArgs>(args?: SelectSubset<T, referral_pointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral_points.
     * @param {referral_pointsDeleteArgs} args - Arguments to delete one Referral_points.
     * @example
     * // Delete one Referral_points
     * const Referral_points = await prisma.referral_points.delete({
     *   where: {
     *     // ... filter to delete one Referral_points
     *   }
     * })
     * 
     */
    delete<T extends referral_pointsDeleteArgs>(args: SelectSubset<T, referral_pointsDeleteArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral_points.
     * @param {referral_pointsUpdateArgs} args - Arguments to update one Referral_points.
     * @example
     * // Update one Referral_points
     * const referral_points = await prisma.referral_points.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referral_pointsUpdateArgs>(args: SelectSubset<T, referral_pointsUpdateArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referral_points.
     * @param {referral_pointsDeleteManyArgs} args - Arguments to filter Referral_points to delete.
     * @example
     * // Delete a few Referral_points
     * const { count } = await prisma.referral_points.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referral_pointsDeleteManyArgs>(args?: SelectSubset<T, referral_pointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_pointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referral_points
     * const referral_points = await prisma.referral_points.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referral_pointsUpdateManyArgs>(args: SelectSubset<T, referral_pointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referral_points and returns the data updated in the database.
     * @param {referral_pointsUpdateManyAndReturnArgs} args - Arguments to update many Referral_points.
     * @example
     * // Update many Referral_points
     * const referral_points = await prisma.referral_points.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referral_points and only return the `id`
     * const referral_pointsWithIdOnly = await prisma.referral_points.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends referral_pointsUpdateManyAndReturnArgs>(args: SelectSubset<T, referral_pointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral_points.
     * @param {referral_pointsUpsertArgs} args - Arguments to update or create a Referral_points.
     * @example
     * // Update or create a Referral_points
     * const referral_points = await prisma.referral_points.upsert({
     *   create: {
     *     // ... data to create a Referral_points
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral_points we want to update
     *   }
     * })
     */
    upsert<T extends referral_pointsUpsertArgs>(args: SelectSubset<T, referral_pointsUpsertArgs<ExtArgs>>): Prisma__referral_pointsClient<$Result.GetResult<Prisma.$referral_pointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referral_points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_pointsCountArgs} args - Arguments to filter Referral_points to count.
     * @example
     * // Count the number of Referral_points
     * const count = await prisma.referral_points.count({
     *   where: {
     *     // ... the filter for the Referral_points we want to count
     *   }
     * })
    **/
    count<T extends referral_pointsCountArgs>(
      args?: Subset<T, referral_pointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Referral_pointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral_points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Referral_pointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Referral_pointsAggregateArgs>(args: Subset<T, Referral_pointsAggregateArgs>): Prisma.PrismaPromise<GetReferral_pointsAggregateType<T>>

    /**
     * Group by Referral_points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referral_pointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends referral_pointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referral_pointsGroupByArgs['orderBy'] }
        : { orderBy?: referral_pointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, referral_pointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferral_pointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referral_points model
   */
  readonly fields: referral_pointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referral_points.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referral_pointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referred_user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the referral_points model
   */
  interface referral_pointsFieldRefs {
    readonly id: FieldRef<"referral_points", 'Int'>
    readonly user_id: FieldRef<"referral_points", 'Int'>
    readonly points: FieldRef<"referral_points", 'Int'>
    readonly earned_at: FieldRef<"referral_points", 'DateTime'>
    readonly expires_at: FieldRef<"referral_points", 'DateTime'>
    readonly used: FieldRef<"referral_points", 'Boolean'>
    readonly referred_user_id: FieldRef<"referral_points", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * referral_points findUnique
   */
  export type referral_pointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * Filter, which referral_points to fetch.
     */
    where: referral_pointsWhereUniqueInput
  }

  /**
   * referral_points findUniqueOrThrow
   */
  export type referral_pointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * Filter, which referral_points to fetch.
     */
    where: referral_pointsWhereUniqueInput
  }

  /**
   * referral_points findFirst
   */
  export type referral_pointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * Filter, which referral_points to fetch.
     */
    where?: referral_pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_points to fetch.
     */
    orderBy?: referral_pointsOrderByWithRelationInput | referral_pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_points.
     */
    cursor?: referral_pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_points.
     */
    distinct?: Referral_pointsScalarFieldEnum | Referral_pointsScalarFieldEnum[]
  }

  /**
   * referral_points findFirstOrThrow
   */
  export type referral_pointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * Filter, which referral_points to fetch.
     */
    where?: referral_pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_points to fetch.
     */
    orderBy?: referral_pointsOrderByWithRelationInput | referral_pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referral_points.
     */
    cursor?: referral_pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referral_points.
     */
    distinct?: Referral_pointsScalarFieldEnum | Referral_pointsScalarFieldEnum[]
  }

  /**
   * referral_points findMany
   */
  export type referral_pointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * Filter, which referral_points to fetch.
     */
    where?: referral_pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referral_points to fetch.
     */
    orderBy?: referral_pointsOrderByWithRelationInput | referral_pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referral_points.
     */
    cursor?: referral_pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referral_points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referral_points.
     */
    skip?: number
    distinct?: Referral_pointsScalarFieldEnum | Referral_pointsScalarFieldEnum[]
  }

  /**
   * referral_points create
   */
  export type referral_pointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * The data needed to create a referral_points.
     */
    data: XOR<referral_pointsCreateInput, referral_pointsUncheckedCreateInput>
  }

  /**
   * referral_points createMany
   */
  export type referral_pointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referral_points.
     */
    data: referral_pointsCreateManyInput | referral_pointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referral_points createManyAndReturn
   */
  export type referral_pointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * The data used to create many referral_points.
     */
    data: referral_pointsCreateManyInput | referral_pointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_points update
   */
  export type referral_pointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * The data needed to update a referral_points.
     */
    data: XOR<referral_pointsUpdateInput, referral_pointsUncheckedUpdateInput>
    /**
     * Choose, which referral_points to update.
     */
    where: referral_pointsWhereUniqueInput
  }

  /**
   * referral_points updateMany
   */
  export type referral_pointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referral_points.
     */
    data: XOR<referral_pointsUpdateManyMutationInput, referral_pointsUncheckedUpdateManyInput>
    /**
     * Filter which referral_points to update
     */
    where?: referral_pointsWhereInput
    /**
     * Limit how many referral_points to update.
     */
    limit?: number
  }

  /**
   * referral_points updateManyAndReturn
   */
  export type referral_pointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * The data used to update referral_points.
     */
    data: XOR<referral_pointsUpdateManyMutationInput, referral_pointsUncheckedUpdateManyInput>
    /**
     * Filter which referral_points to update
     */
    where?: referral_pointsWhereInput
    /**
     * Limit how many referral_points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral_points upsert
   */
  export type referral_pointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * The filter to search for the referral_points to update in case it exists.
     */
    where: referral_pointsWhereUniqueInput
    /**
     * In case the referral_points found by the `where` argument doesn't exist, create a new referral_points with this data.
     */
    create: XOR<referral_pointsCreateInput, referral_pointsUncheckedCreateInput>
    /**
     * In case the referral_points was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referral_pointsUpdateInput, referral_pointsUncheckedUpdateInput>
  }

  /**
   * referral_points delete
   */
  export type referral_pointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
    /**
     * Filter which referral_points to delete.
     */
    where: referral_pointsWhereUniqueInput
  }

  /**
   * referral_points deleteMany
   */
  export type referral_pointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral_points to delete
     */
    where?: referral_pointsWhereInput
    /**
     * Limit how many referral_points to delete.
     */
    limit?: number
  }

  /**
   * referral_points without action
   */
  export type referral_pointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral_points
     */
    select?: referral_pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral_points
     */
    omit?: referral_pointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referral_pointsInclude<ExtArgs> | null
  }


  /**
   * Model prizes
   */

  export type AggregatePrizes = {
    _count: PrizesCountAggregateOutputType | null
    _avg: PrizesAvgAggregateOutputType | null
    _sum: PrizesSumAggregateOutputType | null
    _min: PrizesMinAggregateOutputType | null
    _max: PrizesMaxAggregateOutputType | null
  }

  export type PrizesAvgAggregateOutputType = {
    id: number | null
    points_required: number | null
    stock: number | null
  }

  export type PrizesSumAggregateOutputType = {
    id: number | null
    points_required: number | null
    stock: number | null
  }

  export type PrizesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    points_required: number | null
    stock: number | null
    created_at: Date | null
  }

  export type PrizesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    points_required: number | null
    stock: number | null
    created_at: Date | null
  }

  export type PrizesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    points_required: number
    stock: number
    created_at: number
    _all: number
  }


  export type PrizesAvgAggregateInputType = {
    id?: true
    points_required?: true
    stock?: true
  }

  export type PrizesSumAggregateInputType = {
    id?: true
    points_required?: true
    stock?: true
  }

  export type PrizesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    points_required?: true
    stock?: true
    created_at?: true
  }

  export type PrizesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    points_required?: true
    stock?: true
    created_at?: true
  }

  export type PrizesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    points_required?: true
    stock?: true
    created_at?: true
    _all?: true
  }

  export type PrizesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prizes to aggregate.
     */
    where?: prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prizes to fetch.
     */
    orderBy?: prizesOrderByWithRelationInput | prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prizes
    **/
    _count?: true | PrizesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrizesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrizesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrizesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrizesMaxAggregateInputType
  }

  export type GetPrizesAggregateType<T extends PrizesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrizes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrizes[P]>
      : GetScalarType<T[P], AggregatePrizes[P]>
  }




  export type prizesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prizesWhereInput
    orderBy?: prizesOrderByWithAggregationInput | prizesOrderByWithAggregationInput[]
    by: PrizesScalarFieldEnum[] | PrizesScalarFieldEnum
    having?: prizesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrizesCountAggregateInputType | true
    _avg?: PrizesAvgAggregateInputType
    _sum?: PrizesSumAggregateInputType
    _min?: PrizesMinAggregateInputType
    _max?: PrizesMaxAggregateInputType
  }

  export type PrizesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    points_required: number
    stock: number
    created_at: Date
    _count: PrizesCountAggregateOutputType | null
    _avg: PrizesAvgAggregateOutputType | null
    _sum: PrizesSumAggregateOutputType | null
    _min: PrizesMinAggregateOutputType | null
    _max: PrizesMaxAggregateOutputType | null
  }

  type GetPrizesGroupByPayload<T extends prizesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrizesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrizesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrizesGroupByOutputType[P]>
            : GetScalarType<T[P], PrizesGroupByOutputType[P]>
        }
      >
    >


  export type prizesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    points_required?: boolean
    stock?: boolean
    created_at?: boolean
    claimed_prizes?: boolean | prizes$claimed_prizesArgs<ExtArgs>
    _count?: boolean | PrizesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prizes"]>

  export type prizesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    points_required?: boolean
    stock?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["prizes"]>

  export type prizesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    points_required?: boolean
    stock?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["prizes"]>

  export type prizesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    points_required?: boolean
    stock?: boolean
    created_at?: boolean
  }

  export type prizesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "points_required" | "stock" | "created_at", ExtArgs["result"]["prizes"]>
  export type prizesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claimed_prizes?: boolean | prizes$claimed_prizesArgs<ExtArgs>
    _count?: boolean | PrizesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prizesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type prizesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $prizesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prizes"
    objects: {
      claimed_prizes: Prisma.$claimed_prizesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      points_required: number
      stock: number
      created_at: Date
    }, ExtArgs["result"]["prizes"]>
    composites: {}
  }

  type prizesGetPayload<S extends boolean | null | undefined | prizesDefaultArgs> = $Result.GetResult<Prisma.$prizesPayload, S>

  type prizesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prizesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrizesCountAggregateInputType | true
    }

  export interface prizesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prizes'], meta: { name: 'prizes' } }
    /**
     * Find zero or one Prizes that matches the filter.
     * @param {prizesFindUniqueArgs} args - Arguments to find a Prizes
     * @example
     * // Get one Prizes
     * const prizes = await prisma.prizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prizesFindUniqueArgs>(args: SelectSubset<T, prizesFindUniqueArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prizesFindUniqueOrThrowArgs} args - Arguments to find a Prizes
     * @example
     * // Get one Prizes
     * const prizes = await prisma.prizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prizesFindUniqueOrThrowArgs>(args: SelectSubset<T, prizesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prizesFindFirstArgs} args - Arguments to find a Prizes
     * @example
     * // Get one Prizes
     * const prizes = await prisma.prizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prizesFindFirstArgs>(args?: SelectSubset<T, prizesFindFirstArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prizesFindFirstOrThrowArgs} args - Arguments to find a Prizes
     * @example
     * // Get one Prizes
     * const prizes = await prisma.prizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prizesFindFirstOrThrowArgs>(args?: SelectSubset<T, prizesFindFirstOrThrowArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prizes
     * const prizes = await prisma.prizes.findMany()
     * 
     * // Get first 10 Prizes
     * const prizes = await prisma.prizes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prizesWithIdOnly = await prisma.prizes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prizesFindManyArgs>(args?: SelectSubset<T, prizesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prizes.
     * @param {prizesCreateArgs} args - Arguments to create a Prizes.
     * @example
     * // Create one Prizes
     * const Prizes = await prisma.prizes.create({
     *   data: {
     *     // ... data to create a Prizes
     *   }
     * })
     * 
     */
    create<T extends prizesCreateArgs>(args: SelectSubset<T, prizesCreateArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prizes.
     * @param {prizesCreateManyArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prizes = await prisma.prizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prizesCreateManyArgs>(args?: SelectSubset<T, prizesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prizes and returns the data saved in the database.
     * @param {prizesCreateManyAndReturnArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prizes = await prisma.prizes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prizes and only return the `id`
     * const prizesWithIdOnly = await prisma.prizes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prizesCreateManyAndReturnArgs>(args?: SelectSubset<T, prizesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prizes.
     * @param {prizesDeleteArgs} args - Arguments to delete one Prizes.
     * @example
     * // Delete one Prizes
     * const Prizes = await prisma.prizes.delete({
     *   where: {
     *     // ... filter to delete one Prizes
     *   }
     * })
     * 
     */
    delete<T extends prizesDeleteArgs>(args: SelectSubset<T, prizesDeleteArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prizes.
     * @param {prizesUpdateArgs} args - Arguments to update one Prizes.
     * @example
     * // Update one Prizes
     * const prizes = await prisma.prizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prizesUpdateArgs>(args: SelectSubset<T, prizesUpdateArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prizes.
     * @param {prizesDeleteManyArgs} args - Arguments to filter Prizes to delete.
     * @example
     * // Delete a few Prizes
     * const { count } = await prisma.prizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prizesDeleteManyArgs>(args?: SelectSubset<T, prizesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prizes
     * const prizes = await prisma.prizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prizesUpdateManyArgs>(args: SelectSubset<T, prizesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prizes and returns the data updated in the database.
     * @param {prizesUpdateManyAndReturnArgs} args - Arguments to update many Prizes.
     * @example
     * // Update many Prizes
     * const prizes = await prisma.prizes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prizes and only return the `id`
     * const prizesWithIdOnly = await prisma.prizes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prizesUpdateManyAndReturnArgs>(args: SelectSubset<T, prizesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prizes.
     * @param {prizesUpsertArgs} args - Arguments to update or create a Prizes.
     * @example
     * // Update or create a Prizes
     * const prizes = await prisma.prizes.upsert({
     *   create: {
     *     // ... data to create a Prizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prizes we want to update
     *   }
     * })
     */
    upsert<T extends prizesUpsertArgs>(args: SelectSubset<T, prizesUpsertArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prizesCountArgs} args - Arguments to filter Prizes to count.
     * @example
     * // Count the number of Prizes
     * const count = await prisma.prizes.count({
     *   where: {
     *     // ... the filter for the Prizes we want to count
     *   }
     * })
    **/
    count<T extends prizesCountArgs>(
      args?: Subset<T, prizesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrizesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrizesAggregateArgs>(args: Subset<T, PrizesAggregateArgs>): Prisma.PrismaPromise<GetPrizesAggregateType<T>>

    /**
     * Group by Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prizesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prizesGroupByArgs['orderBy'] }
        : { orderBy?: prizesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prizesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prizes model
   */
  readonly fields: prizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prizesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claimed_prizes<T extends prizes$claimed_prizesArgs<ExtArgs> = {}>(args?: Subset<T, prizes$claimed_prizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prizes model
   */
  interface prizesFieldRefs {
    readonly id: FieldRef<"prizes", 'Int'>
    readonly name: FieldRef<"prizes", 'String'>
    readonly description: FieldRef<"prizes", 'String'>
    readonly points_required: FieldRef<"prizes", 'Int'>
    readonly stock: FieldRef<"prizes", 'Int'>
    readonly created_at: FieldRef<"prizes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * prizes findUnique
   */
  export type prizesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * Filter, which prizes to fetch.
     */
    where: prizesWhereUniqueInput
  }

  /**
   * prizes findUniqueOrThrow
   */
  export type prizesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * Filter, which prizes to fetch.
     */
    where: prizesWhereUniqueInput
  }

  /**
   * prizes findFirst
   */
  export type prizesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * Filter, which prizes to fetch.
     */
    where?: prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prizes to fetch.
     */
    orderBy?: prizesOrderByWithRelationInput | prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prizes.
     */
    cursor?: prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prizes.
     */
    distinct?: PrizesScalarFieldEnum | PrizesScalarFieldEnum[]
  }

  /**
   * prizes findFirstOrThrow
   */
  export type prizesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * Filter, which prizes to fetch.
     */
    where?: prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prizes to fetch.
     */
    orderBy?: prizesOrderByWithRelationInput | prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prizes.
     */
    cursor?: prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prizes.
     */
    distinct?: PrizesScalarFieldEnum | PrizesScalarFieldEnum[]
  }

  /**
   * prizes findMany
   */
  export type prizesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * Filter, which prizes to fetch.
     */
    where?: prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prizes to fetch.
     */
    orderBy?: prizesOrderByWithRelationInput | prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prizes.
     */
    cursor?: prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prizes.
     */
    skip?: number
    distinct?: PrizesScalarFieldEnum | PrizesScalarFieldEnum[]
  }

  /**
   * prizes create
   */
  export type prizesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * The data needed to create a prizes.
     */
    data: XOR<prizesCreateInput, prizesUncheckedCreateInput>
  }

  /**
   * prizes createMany
   */
  export type prizesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prizes.
     */
    data: prizesCreateManyInput | prizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prizes createManyAndReturn
   */
  export type prizesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * The data used to create many prizes.
     */
    data: prizesCreateManyInput | prizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prizes update
   */
  export type prizesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * The data needed to update a prizes.
     */
    data: XOR<prizesUpdateInput, prizesUncheckedUpdateInput>
    /**
     * Choose, which prizes to update.
     */
    where: prizesWhereUniqueInput
  }

  /**
   * prizes updateMany
   */
  export type prizesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prizes.
     */
    data: XOR<prizesUpdateManyMutationInput, prizesUncheckedUpdateManyInput>
    /**
     * Filter which prizes to update
     */
    where?: prizesWhereInput
    /**
     * Limit how many prizes to update.
     */
    limit?: number
  }

  /**
   * prizes updateManyAndReturn
   */
  export type prizesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * The data used to update prizes.
     */
    data: XOR<prizesUpdateManyMutationInput, prizesUncheckedUpdateManyInput>
    /**
     * Filter which prizes to update
     */
    where?: prizesWhereInput
    /**
     * Limit how many prizes to update.
     */
    limit?: number
  }

  /**
   * prizes upsert
   */
  export type prizesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * The filter to search for the prizes to update in case it exists.
     */
    where: prizesWhereUniqueInput
    /**
     * In case the prizes found by the `where` argument doesn't exist, create a new prizes with this data.
     */
    create: XOR<prizesCreateInput, prizesUncheckedCreateInput>
    /**
     * In case the prizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prizesUpdateInput, prizesUncheckedUpdateInput>
  }

  /**
   * prizes delete
   */
  export type prizesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
    /**
     * Filter which prizes to delete.
     */
    where: prizesWhereUniqueInput
  }

  /**
   * prizes deleteMany
   */
  export type prizesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prizes to delete
     */
    where?: prizesWhereInput
    /**
     * Limit how many prizes to delete.
     */
    limit?: number
  }

  /**
   * prizes.claimed_prizes
   */
  export type prizes$claimed_prizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    where?: claimed_prizesWhereInput
    orderBy?: claimed_prizesOrderByWithRelationInput | claimed_prizesOrderByWithRelationInput[]
    cursor?: claimed_prizesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Claimed_prizesScalarFieldEnum | Claimed_prizesScalarFieldEnum[]
  }

  /**
   * prizes without action
   */
  export type prizesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prizes
     */
    select?: prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prizes
     */
    omit?: prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prizesInclude<ExtArgs> | null
  }


  /**
   * Model claimed_prizes
   */

  export type AggregateClaimed_prizes = {
    _count: Claimed_prizesCountAggregateOutputType | null
    _avg: Claimed_prizesAvgAggregateOutputType | null
    _sum: Claimed_prizesSumAggregateOutputType | null
    _min: Claimed_prizesMinAggregateOutputType | null
    _max: Claimed_prizesMaxAggregateOutputType | null
  }

  export type Claimed_prizesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    prize_id: number | null
  }

  export type Claimed_prizesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    prize_id: number | null
  }

  export type Claimed_prizesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    prize_id: number | null
    claimed_at: Date | null
  }

  export type Claimed_prizesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    prize_id: number | null
    claimed_at: Date | null
  }

  export type Claimed_prizesCountAggregateOutputType = {
    id: number
    user_id: number
    prize_id: number
    claimed_at: number
    _all: number
  }


  export type Claimed_prizesAvgAggregateInputType = {
    id?: true
    user_id?: true
    prize_id?: true
  }

  export type Claimed_prizesSumAggregateInputType = {
    id?: true
    user_id?: true
    prize_id?: true
  }

  export type Claimed_prizesMinAggregateInputType = {
    id?: true
    user_id?: true
    prize_id?: true
    claimed_at?: true
  }

  export type Claimed_prizesMaxAggregateInputType = {
    id?: true
    user_id?: true
    prize_id?: true
    claimed_at?: true
  }

  export type Claimed_prizesCountAggregateInputType = {
    id?: true
    user_id?: true
    prize_id?: true
    claimed_at?: true
    _all?: true
  }

  export type Claimed_prizesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claimed_prizes to aggregate.
     */
    where?: claimed_prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimed_prizes to fetch.
     */
    orderBy?: claimed_prizesOrderByWithRelationInput | claimed_prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: claimed_prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimed_prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimed_prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned claimed_prizes
    **/
    _count?: true | Claimed_prizesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Claimed_prizesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Claimed_prizesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Claimed_prizesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Claimed_prizesMaxAggregateInputType
  }

  export type GetClaimed_prizesAggregateType<T extends Claimed_prizesAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimed_prizes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimed_prizes[P]>
      : GetScalarType<T[P], AggregateClaimed_prizes[P]>
  }




  export type claimed_prizesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimed_prizesWhereInput
    orderBy?: claimed_prizesOrderByWithAggregationInput | claimed_prizesOrderByWithAggregationInput[]
    by: Claimed_prizesScalarFieldEnum[] | Claimed_prizesScalarFieldEnum
    having?: claimed_prizesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Claimed_prizesCountAggregateInputType | true
    _avg?: Claimed_prizesAvgAggregateInputType
    _sum?: Claimed_prizesSumAggregateInputType
    _min?: Claimed_prizesMinAggregateInputType
    _max?: Claimed_prizesMaxAggregateInputType
  }

  export type Claimed_prizesGroupByOutputType = {
    id: number
    user_id: number
    prize_id: number
    claimed_at: Date
    _count: Claimed_prizesCountAggregateOutputType | null
    _avg: Claimed_prizesAvgAggregateOutputType | null
    _sum: Claimed_prizesSumAggregateOutputType | null
    _min: Claimed_prizesMinAggregateOutputType | null
    _max: Claimed_prizesMaxAggregateOutputType | null
  }

  type GetClaimed_prizesGroupByPayload<T extends claimed_prizesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Claimed_prizesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Claimed_prizesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Claimed_prizesGroupByOutputType[P]>
            : GetScalarType<T[P], Claimed_prizesGroupByOutputType[P]>
        }
      >
    >


  export type claimed_prizesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    prize_id?: boolean
    claimed_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    prize?: boolean | prizesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimed_prizes"]>

  export type claimed_prizesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    prize_id?: boolean
    claimed_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    prize?: boolean | prizesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimed_prizes"]>

  export type claimed_prizesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    prize_id?: boolean
    claimed_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    prize?: boolean | prizesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimed_prizes"]>

  export type claimed_prizesSelectScalar = {
    id?: boolean
    user_id?: boolean
    prize_id?: boolean
    claimed_at?: boolean
  }

  export type claimed_prizesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "prize_id" | "claimed_at", ExtArgs["result"]["claimed_prizes"]>
  export type claimed_prizesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    prize?: boolean | prizesDefaultArgs<ExtArgs>
  }
  export type claimed_prizesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    prize?: boolean | prizesDefaultArgs<ExtArgs>
  }
  export type claimed_prizesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    prize?: boolean | prizesDefaultArgs<ExtArgs>
  }

  export type $claimed_prizesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "claimed_prizes"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      prize: Prisma.$prizesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      prize_id: number
      claimed_at: Date
    }, ExtArgs["result"]["claimed_prizes"]>
    composites: {}
  }

  type claimed_prizesGetPayload<S extends boolean | null | undefined | claimed_prizesDefaultArgs> = $Result.GetResult<Prisma.$claimed_prizesPayload, S>

  type claimed_prizesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<claimed_prizesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Claimed_prizesCountAggregateInputType | true
    }

  export interface claimed_prizesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['claimed_prizes'], meta: { name: 'claimed_prizes' } }
    /**
     * Find zero or one Claimed_prizes that matches the filter.
     * @param {claimed_prizesFindUniqueArgs} args - Arguments to find a Claimed_prizes
     * @example
     * // Get one Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends claimed_prizesFindUniqueArgs>(args: SelectSubset<T, claimed_prizesFindUniqueArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claimed_prizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {claimed_prizesFindUniqueOrThrowArgs} args - Arguments to find a Claimed_prizes
     * @example
     * // Get one Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends claimed_prizesFindUniqueOrThrowArgs>(args: SelectSubset<T, claimed_prizesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claimed_prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimed_prizesFindFirstArgs} args - Arguments to find a Claimed_prizes
     * @example
     * // Get one Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends claimed_prizesFindFirstArgs>(args?: SelectSubset<T, claimed_prizesFindFirstArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claimed_prizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimed_prizesFindFirstOrThrowArgs} args - Arguments to find a Claimed_prizes
     * @example
     * // Get one Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends claimed_prizesFindFirstOrThrowArgs>(args?: SelectSubset<T, claimed_prizesFindFirstOrThrowArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claimed_prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimed_prizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.findMany()
     * 
     * // Get first 10 Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimed_prizesWithIdOnly = await prisma.claimed_prizes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends claimed_prizesFindManyArgs>(args?: SelectSubset<T, claimed_prizesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claimed_prizes.
     * @param {claimed_prizesCreateArgs} args - Arguments to create a Claimed_prizes.
     * @example
     * // Create one Claimed_prizes
     * const Claimed_prizes = await prisma.claimed_prizes.create({
     *   data: {
     *     // ... data to create a Claimed_prizes
     *   }
     * })
     * 
     */
    create<T extends claimed_prizesCreateArgs>(args: SelectSubset<T, claimed_prizesCreateArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claimed_prizes.
     * @param {claimed_prizesCreateManyArgs} args - Arguments to create many Claimed_prizes.
     * @example
     * // Create many Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends claimed_prizesCreateManyArgs>(args?: SelectSubset<T, claimed_prizesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claimed_prizes and returns the data saved in the database.
     * @param {claimed_prizesCreateManyAndReturnArgs} args - Arguments to create many Claimed_prizes.
     * @example
     * // Create many Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claimed_prizes and only return the `id`
     * const claimed_prizesWithIdOnly = await prisma.claimed_prizes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends claimed_prizesCreateManyAndReturnArgs>(args?: SelectSubset<T, claimed_prizesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claimed_prizes.
     * @param {claimed_prizesDeleteArgs} args - Arguments to delete one Claimed_prizes.
     * @example
     * // Delete one Claimed_prizes
     * const Claimed_prizes = await prisma.claimed_prizes.delete({
     *   where: {
     *     // ... filter to delete one Claimed_prizes
     *   }
     * })
     * 
     */
    delete<T extends claimed_prizesDeleteArgs>(args: SelectSubset<T, claimed_prizesDeleteArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claimed_prizes.
     * @param {claimed_prizesUpdateArgs} args - Arguments to update one Claimed_prizes.
     * @example
     * // Update one Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends claimed_prizesUpdateArgs>(args: SelectSubset<T, claimed_prizesUpdateArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claimed_prizes.
     * @param {claimed_prizesDeleteManyArgs} args - Arguments to filter Claimed_prizes to delete.
     * @example
     * // Delete a few Claimed_prizes
     * const { count } = await prisma.claimed_prizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends claimed_prizesDeleteManyArgs>(args?: SelectSubset<T, claimed_prizesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claimed_prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimed_prizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends claimed_prizesUpdateManyArgs>(args: SelectSubset<T, claimed_prizesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claimed_prizes and returns the data updated in the database.
     * @param {claimed_prizesUpdateManyAndReturnArgs} args - Arguments to update many Claimed_prizes.
     * @example
     * // Update many Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claimed_prizes and only return the `id`
     * const claimed_prizesWithIdOnly = await prisma.claimed_prizes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends claimed_prizesUpdateManyAndReturnArgs>(args: SelectSubset<T, claimed_prizesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claimed_prizes.
     * @param {claimed_prizesUpsertArgs} args - Arguments to update or create a Claimed_prizes.
     * @example
     * // Update or create a Claimed_prizes
     * const claimed_prizes = await prisma.claimed_prizes.upsert({
     *   create: {
     *     // ... data to create a Claimed_prizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claimed_prizes we want to update
     *   }
     * })
     */
    upsert<T extends claimed_prizesUpsertArgs>(args: SelectSubset<T, claimed_prizesUpsertArgs<ExtArgs>>): Prisma__claimed_prizesClient<$Result.GetResult<Prisma.$claimed_prizesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claimed_prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimed_prizesCountArgs} args - Arguments to filter Claimed_prizes to count.
     * @example
     * // Count the number of Claimed_prizes
     * const count = await prisma.claimed_prizes.count({
     *   where: {
     *     // ... the filter for the Claimed_prizes we want to count
     *   }
     * })
    **/
    count<T extends claimed_prizesCountArgs>(
      args?: Subset<T, claimed_prizesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Claimed_prizesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claimed_prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Claimed_prizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Claimed_prizesAggregateArgs>(args: Subset<T, Claimed_prizesAggregateArgs>): Prisma.PrismaPromise<GetClaimed_prizesAggregateType<T>>

    /**
     * Group by Claimed_prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimed_prizesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends claimed_prizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: claimed_prizesGroupByArgs['orderBy'] }
        : { orderBy?: claimed_prizesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, claimed_prizesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimed_prizesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the claimed_prizes model
   */
  readonly fields: claimed_prizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for claimed_prizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__claimed_prizesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prize<T extends prizesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prizesDefaultArgs<ExtArgs>>): Prisma__prizesClient<$Result.GetResult<Prisma.$prizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the claimed_prizes model
   */
  interface claimed_prizesFieldRefs {
    readonly id: FieldRef<"claimed_prizes", 'Int'>
    readonly user_id: FieldRef<"claimed_prizes", 'Int'>
    readonly prize_id: FieldRef<"claimed_prizes", 'Int'>
    readonly claimed_at: FieldRef<"claimed_prizes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * claimed_prizes findUnique
   */
  export type claimed_prizesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * Filter, which claimed_prizes to fetch.
     */
    where: claimed_prizesWhereUniqueInput
  }

  /**
   * claimed_prizes findUniqueOrThrow
   */
  export type claimed_prizesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * Filter, which claimed_prizes to fetch.
     */
    where: claimed_prizesWhereUniqueInput
  }

  /**
   * claimed_prizes findFirst
   */
  export type claimed_prizesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * Filter, which claimed_prizes to fetch.
     */
    where?: claimed_prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimed_prizes to fetch.
     */
    orderBy?: claimed_prizesOrderByWithRelationInput | claimed_prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claimed_prizes.
     */
    cursor?: claimed_prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimed_prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimed_prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claimed_prizes.
     */
    distinct?: Claimed_prizesScalarFieldEnum | Claimed_prizesScalarFieldEnum[]
  }

  /**
   * claimed_prizes findFirstOrThrow
   */
  export type claimed_prizesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * Filter, which claimed_prizes to fetch.
     */
    where?: claimed_prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimed_prizes to fetch.
     */
    orderBy?: claimed_prizesOrderByWithRelationInput | claimed_prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claimed_prizes.
     */
    cursor?: claimed_prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimed_prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimed_prizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claimed_prizes.
     */
    distinct?: Claimed_prizesScalarFieldEnum | Claimed_prizesScalarFieldEnum[]
  }

  /**
   * claimed_prizes findMany
   */
  export type claimed_prizesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * Filter, which claimed_prizes to fetch.
     */
    where?: claimed_prizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimed_prizes to fetch.
     */
    orderBy?: claimed_prizesOrderByWithRelationInput | claimed_prizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing claimed_prizes.
     */
    cursor?: claimed_prizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimed_prizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimed_prizes.
     */
    skip?: number
    distinct?: Claimed_prizesScalarFieldEnum | Claimed_prizesScalarFieldEnum[]
  }

  /**
   * claimed_prizes create
   */
  export type claimed_prizesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * The data needed to create a claimed_prizes.
     */
    data: XOR<claimed_prizesCreateInput, claimed_prizesUncheckedCreateInput>
  }

  /**
   * claimed_prizes createMany
   */
  export type claimed_prizesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many claimed_prizes.
     */
    data: claimed_prizesCreateManyInput | claimed_prizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * claimed_prizes createManyAndReturn
   */
  export type claimed_prizesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * The data used to create many claimed_prizes.
     */
    data: claimed_prizesCreateManyInput | claimed_prizesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * claimed_prizes update
   */
  export type claimed_prizesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * The data needed to update a claimed_prizes.
     */
    data: XOR<claimed_prizesUpdateInput, claimed_prizesUncheckedUpdateInput>
    /**
     * Choose, which claimed_prizes to update.
     */
    where: claimed_prizesWhereUniqueInput
  }

  /**
   * claimed_prizes updateMany
   */
  export type claimed_prizesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update claimed_prizes.
     */
    data: XOR<claimed_prizesUpdateManyMutationInput, claimed_prizesUncheckedUpdateManyInput>
    /**
     * Filter which claimed_prizes to update
     */
    where?: claimed_prizesWhereInput
    /**
     * Limit how many claimed_prizes to update.
     */
    limit?: number
  }

  /**
   * claimed_prizes updateManyAndReturn
   */
  export type claimed_prizesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * The data used to update claimed_prizes.
     */
    data: XOR<claimed_prizesUpdateManyMutationInput, claimed_prizesUncheckedUpdateManyInput>
    /**
     * Filter which claimed_prizes to update
     */
    where?: claimed_prizesWhereInput
    /**
     * Limit how many claimed_prizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * claimed_prizes upsert
   */
  export type claimed_prizesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * The filter to search for the claimed_prizes to update in case it exists.
     */
    where: claimed_prizesWhereUniqueInput
    /**
     * In case the claimed_prizes found by the `where` argument doesn't exist, create a new claimed_prizes with this data.
     */
    create: XOR<claimed_prizesCreateInput, claimed_prizesUncheckedCreateInput>
    /**
     * In case the claimed_prizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<claimed_prizesUpdateInput, claimed_prizesUncheckedUpdateInput>
  }

  /**
   * claimed_prizes delete
   */
  export type claimed_prizesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
    /**
     * Filter which claimed_prizes to delete.
     */
    where: claimed_prizesWhereUniqueInput
  }

  /**
   * claimed_prizes deleteMany
   */
  export type claimed_prizesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claimed_prizes to delete
     */
    where?: claimed_prizesWhereInput
    /**
     * Limit how many claimed_prizes to delete.
     */
    limit?: number
  }

  /**
   * claimed_prizes without action
   */
  export type claimed_prizesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimed_prizes
     */
    select?: claimed_prizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claimed_prizes
     */
    omit?: claimed_prizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimed_prizesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    profile_picture: 'profile_picture',
    referral_code: 'referral_code',
    referred_by_id: 'referred_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Password_resetsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Password_resetsScalarFieldEnum = (typeof Password_resetsScalarFieldEnum)[keyof typeof Password_resetsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    time: 'time',
    location: 'location',
    price: 'price',
    total_seats: 'total_seats',
    available_seats: 'available_seats',
    category: 'category',
    image: 'image',
    organizer_id: 'organizer_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const VenuesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    capacity: 'capacity',
    contact_info: 'contact_info',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VenuesScalarFieldEnum = (typeof VenuesScalarFieldEnum)[keyof typeof VenuesScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    price: 'price',
    quantity: 'quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    quantity: 'quantity',
    total_price: 'total_price',
    booking_date: 'booking_date',
    status: 'status'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_date: 'payment_date',
    status: 'status'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const CouponsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    user_id: 'user_id',
    discount_percent: 'discount_percent',
    issued_at: 'issued_at',
    expires_at: 'expires_at',
    is_used: 'is_used',
    source: 'source'
  };

  export type CouponsScalarFieldEnum = (typeof CouponsScalarFieldEnum)[keyof typeof CouponsScalarFieldEnum]


  export const Referral_pointsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    points: 'points',
    earned_at: 'earned_at',
    expires_at: 'expires_at',
    used: 'used',
    referred_user_id: 'referred_user_id'
  };

  export type Referral_pointsScalarFieldEnum = (typeof Referral_pointsScalarFieldEnum)[keyof typeof Referral_pointsScalarFieldEnum]


  export const PrizesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    points_required: 'points_required',
    stock: 'stock',
    created_at: 'created_at'
  };

  export type PrizesScalarFieldEnum = (typeof PrizesScalarFieldEnum)[keyof typeof PrizesScalarFieldEnum]


  export const Claimed_prizesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    prize_id: 'prize_id',
    claimed_at: 'claimed_at'
  };

  export type Claimed_prizesScalarFieldEnum = (typeof Claimed_prizesScalarFieldEnum)[keyof typeof Claimed_prizesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    profile_picture?: StringNullableFilter<"users"> | string | null
    referral_code?: StringFilter<"users"> | string
    referred_by_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    referred_by?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    referred_users?: UsersListRelationFilter
    password_resets?: Password_resetsListRelationFilter
    events?: EventsListRelationFilter
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
    coupons?: CouponsListRelationFilter
    referral_points?: Referral_pointsListRelationFilter
    referral_points_referred?: Referral_pointsListRelationFilter
    claimed_prizes?: Claimed_prizesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    referral_code?: SortOrder
    referred_by_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    referred_by?: usersOrderByWithRelationInput
    referred_users?: usersOrderByRelationAggregateInput
    password_resets?: password_resetsOrderByRelationAggregateInput
    events?: eventsOrderByRelationAggregateInput
    bookings?: bookingsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    coupons?: couponsOrderByRelationAggregateInput
    referral_points?: referral_pointsOrderByRelationAggregateInput
    referral_points_referred?: referral_pointsOrderByRelationAggregateInput
    claimed_prizes?: claimed_prizesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    referral_code?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    profile_picture?: StringNullableFilter<"users"> | string | null
    referred_by_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    referred_by?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    referred_users?: UsersListRelationFilter
    password_resets?: Password_resetsListRelationFilter
    events?: EventsListRelationFilter
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
    coupons?: CouponsListRelationFilter
    referral_points?: Referral_pointsListRelationFilter
    referral_points_referred?: Referral_pointsListRelationFilter
    claimed_prizes?: Claimed_prizesListRelationFilter
  }, "id" | "email" | "referral_code">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    referral_code?: SortOrder
    referred_by_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    profile_picture?: StringNullableWithAggregatesFilter<"users"> | string | null
    referral_code?: StringWithAggregatesFilter<"users"> | string
    referred_by_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type password_resetsWhereInput = {
    AND?: password_resetsWhereInput | password_resetsWhereInput[]
    OR?: password_resetsWhereInput[]
    NOT?: password_resetsWhereInput | password_resetsWhereInput[]
    id?: IntFilter<"password_resets"> | number
    user_id?: IntFilter<"password_resets"> | number
    token?: StringFilter<"password_resets"> | string
    expires_at?: DateTimeFilter<"password_resets"> | Date | string
    created_at?: DateTimeFilter<"password_resets"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type password_resetsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type password_resetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: password_resetsWhereInput | password_resetsWhereInput[]
    OR?: password_resetsWhereInput[]
    NOT?: password_resetsWhereInput | password_resetsWhereInput[]
    user_id?: IntFilter<"password_resets"> | number
    expires_at?: DateTimeFilter<"password_resets"> | Date | string
    created_at?: DateTimeFilter<"password_resets"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "token">

  export type password_resetsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: password_resetsCountOrderByAggregateInput
    _avg?: password_resetsAvgOrderByAggregateInput
    _max?: password_resetsMaxOrderByAggregateInput
    _min?: password_resetsMinOrderByAggregateInput
    _sum?: password_resetsSumOrderByAggregateInput
  }

  export type password_resetsScalarWhereWithAggregatesInput = {
    AND?: password_resetsScalarWhereWithAggregatesInput | password_resetsScalarWhereWithAggregatesInput[]
    OR?: password_resetsScalarWhereWithAggregatesInput[]
    NOT?: password_resetsScalarWhereWithAggregatesInput | password_resetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"password_resets"> | number
    user_id?: IntWithAggregatesFilter<"password_resets"> | number
    token?: StringWithAggregatesFilter<"password_resets"> | string
    expires_at?: DateTimeWithAggregatesFilter<"password_resets"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"password_resets"> | Date | string
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    title?: StringFilter<"events"> | string
    description?: StringNullableFilter<"events"> | string | null
    date?: DateTimeFilter<"events"> | Date | string
    time?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    price?: DecimalFilter<"events"> | Decimal | DecimalJsLike | number | string
    total_seats?: IntFilter<"events"> | number
    available_seats?: IntFilter<"events"> | number
    category?: StringFilter<"events"> | string
    image?: StringNullableFilter<"events"> | string | null
    organizer_id?: IntFilter<"events"> | number
    created_at?: DateTimeFilter<"events"> | Date | string
    updated_at?: DateTimeFilter<"events"> | Date | string
    organizer?: XOR<UsersScalarRelationFilter, usersWhereInput>
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    organizer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    organizer?: usersOrderByWithRelationInput
    bookings?: bookingsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    title?: StringFilter<"events"> | string
    description?: StringNullableFilter<"events"> | string | null
    date?: DateTimeFilter<"events"> | Date | string
    time?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    price?: DecimalFilter<"events"> | Decimal | DecimalJsLike | number | string
    total_seats?: IntFilter<"events"> | number
    available_seats?: IntFilter<"events"> | number
    category?: StringFilter<"events"> | string
    image?: StringNullableFilter<"events"> | string | null
    organizer_id?: IntFilter<"events"> | number
    created_at?: DateTimeFilter<"events"> | Date | string
    updated_at?: DateTimeFilter<"events"> | Date | string
    organizer?: XOR<UsersScalarRelationFilter, usersWhereInput>
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    organizer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    title?: StringWithAggregatesFilter<"events"> | string
    description?: StringNullableWithAggregatesFilter<"events"> | string | null
    date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    time?: StringWithAggregatesFilter<"events"> | string
    location?: StringWithAggregatesFilter<"events"> | string
    price?: DecimalWithAggregatesFilter<"events"> | Decimal | DecimalJsLike | number | string
    total_seats?: IntWithAggregatesFilter<"events"> | number
    available_seats?: IntWithAggregatesFilter<"events"> | number
    category?: StringWithAggregatesFilter<"events"> | string
    image?: StringNullableWithAggregatesFilter<"events"> | string | null
    organizer_id?: IntWithAggregatesFilter<"events"> | number
    created_at?: DateTimeWithAggregatesFilter<"events"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"events"> | Date | string
  }

  export type venuesWhereInput = {
    AND?: venuesWhereInput | venuesWhereInput[]
    OR?: venuesWhereInput[]
    NOT?: venuesWhereInput | venuesWhereInput[]
    id?: IntFilter<"venues"> | number
    name?: StringFilter<"venues"> | string
    address?: StringNullableFilter<"venues"> | string | null
    city?: StringFilter<"venues"> | string
    capacity?: IntFilter<"venues"> | number
    contact_info?: StringNullableFilter<"venues"> | string | null
    created_at?: DateTimeFilter<"venues"> | Date | string
    updated_at?: DateTimeFilter<"venues"> | Date | string
  }

  export type venuesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrder
    capacity?: SortOrder
    contact_info?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: venuesWhereInput | venuesWhereInput[]
    OR?: venuesWhereInput[]
    NOT?: venuesWhereInput | venuesWhereInput[]
    name?: StringFilter<"venues"> | string
    address?: StringNullableFilter<"venues"> | string | null
    city?: StringFilter<"venues"> | string
    capacity?: IntFilter<"venues"> | number
    contact_info?: StringNullableFilter<"venues"> | string | null
    created_at?: DateTimeFilter<"venues"> | Date | string
    updated_at?: DateTimeFilter<"venues"> | Date | string
  }, "id">

  export type venuesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrder
    capacity?: SortOrder
    contact_info?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: venuesCountOrderByAggregateInput
    _avg?: venuesAvgOrderByAggregateInput
    _max?: venuesMaxOrderByAggregateInput
    _min?: venuesMinOrderByAggregateInput
    _sum?: venuesSumOrderByAggregateInput
  }

  export type venuesScalarWhereWithAggregatesInput = {
    AND?: venuesScalarWhereWithAggregatesInput | venuesScalarWhereWithAggregatesInput[]
    OR?: venuesScalarWhereWithAggregatesInput[]
    NOT?: venuesScalarWhereWithAggregatesInput | venuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"venues"> | number
    name?: StringWithAggregatesFilter<"venues"> | string
    address?: StringNullableWithAggregatesFilter<"venues"> | string | null
    city?: StringWithAggregatesFilter<"venues"> | string
    capacity?: IntWithAggregatesFilter<"venues"> | number
    contact_info?: StringNullableWithAggregatesFilter<"venues"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"venues"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"venues"> | Date | string
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    id?: IntFilter<"tickets"> | number
    type?: StringFilter<"tickets"> | string
    price?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"tickets"> | number
    created_at?: DateTimeFilter<"tickets"> | Date | string
    updated_at?: DateTimeFilter<"tickets"> | Date | string
  }

  export type ticketsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    type?: StringFilter<"tickets"> | string
    price?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"tickets"> | number
    created_at?: DateTimeFilter<"tickets"> | Date | string
    updated_at?: DateTimeFilter<"tickets"> | Date | string
  }, "id">

  export type ticketsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _avg?: ticketsAvgOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
    _sum?: ticketsSumOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tickets"> | number
    type?: StringWithAggregatesFilter<"tickets"> | string
    price?: DecimalWithAggregatesFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"tickets"> | number
    created_at?: DateTimeWithAggregatesFilter<"tickets"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tickets"> | Date | string
  }

  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: IntFilter<"bookings"> | number
    user_id?: IntFilter<"bookings"> | number
    event_id?: IntFilter<"bookings"> | number
    quantity?: IntFilter<"bookings"> | number
    total_price?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFilter<"bookings"> | Date | string
    status?: StringFilter<"bookings"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    event?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    payments?: PaymentsListRelationFilter
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    user?: usersOrderByWithRelationInput
    event?: eventsOrderByWithRelationInput
    payments?: paymentsOrderByRelationAggregateInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    user_id?: IntFilter<"bookings"> | number
    event_id?: IntFilter<"bookings"> | number
    quantity?: IntFilter<"bookings"> | number
    total_price?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFilter<"bookings"> | Date | string
    status?: StringFilter<"bookings"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    event?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    payments?: PaymentsListRelationFilter
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bookings"> | number
    user_id?: IntWithAggregatesFilter<"bookings"> | number
    event_id?: IntWithAggregatesFilter<"bookings"> | number
    quantity?: IntWithAggregatesFilter<"bookings"> | number
    total_price?: DecimalWithAggregatesFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    status?: StringWithAggregatesFilter<"bookings"> | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    booking_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payments"> | string
    payment_date?: DateTimeFilter<"payments"> | Date | string
    status?: StringFilter<"payments"> | string
    booking?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    booking?: bookingsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    booking_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payments"> | string
    payment_date?: DateTimeFilter<"payments"> | Date | string
    status?: StringFilter<"payments"> | string
    booking?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    booking_id?: IntWithAggregatesFilter<"payments"> | number
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringWithAggregatesFilter<"payments"> | string
    payment_date?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    status?: StringWithAggregatesFilter<"payments"> | string
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    event_id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeFilter<"reviews"> | Date | string
    event?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    event?: eventsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    event_id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeFilter<"reviews"> | Date | string
    event?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    event_id?: IntWithAggregatesFilter<"reviews"> | number
    user_id?: IntWithAggregatesFilter<"reviews"> | number
    rating?: IntWithAggregatesFilter<"reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"reviews"> | Date | string
  }

  export type couponsWhereInput = {
    AND?: couponsWhereInput | couponsWhereInput[]
    OR?: couponsWhereInput[]
    NOT?: couponsWhereInput | couponsWhereInput[]
    id?: IntFilter<"coupons"> | number
    code?: StringFilter<"coupons"> | string
    user_id?: IntFilter<"coupons"> | number
    discount_percent?: IntFilter<"coupons"> | number
    issued_at?: DateTimeFilter<"coupons"> | Date | string
    expires_at?: DateTimeFilter<"coupons"> | Date | string
    is_used?: BoolFilter<"coupons"> | boolean
    source?: StringNullableFilter<"coupons"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type couponsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    source?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type couponsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: couponsWhereInput | couponsWhereInput[]
    OR?: couponsWhereInput[]
    NOT?: couponsWhereInput | couponsWhereInput[]
    user_id?: IntFilter<"coupons"> | number
    discount_percent?: IntFilter<"coupons"> | number
    issued_at?: DateTimeFilter<"coupons"> | Date | string
    expires_at?: DateTimeFilter<"coupons"> | Date | string
    is_used?: BoolFilter<"coupons"> | boolean
    source?: StringNullableFilter<"coupons"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "code">

  export type couponsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    source?: SortOrderInput | SortOrder
    _count?: couponsCountOrderByAggregateInput
    _avg?: couponsAvgOrderByAggregateInput
    _max?: couponsMaxOrderByAggregateInput
    _min?: couponsMinOrderByAggregateInput
    _sum?: couponsSumOrderByAggregateInput
  }

  export type couponsScalarWhereWithAggregatesInput = {
    AND?: couponsScalarWhereWithAggregatesInput | couponsScalarWhereWithAggregatesInput[]
    OR?: couponsScalarWhereWithAggregatesInput[]
    NOT?: couponsScalarWhereWithAggregatesInput | couponsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"coupons"> | number
    code?: StringWithAggregatesFilter<"coupons"> | string
    user_id?: IntWithAggregatesFilter<"coupons"> | number
    discount_percent?: IntWithAggregatesFilter<"coupons"> | number
    issued_at?: DateTimeWithAggregatesFilter<"coupons"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"coupons"> | Date | string
    is_used?: BoolWithAggregatesFilter<"coupons"> | boolean
    source?: StringNullableWithAggregatesFilter<"coupons"> | string | null
  }

  export type referral_pointsWhereInput = {
    AND?: referral_pointsWhereInput | referral_pointsWhereInput[]
    OR?: referral_pointsWhereInput[]
    NOT?: referral_pointsWhereInput | referral_pointsWhereInput[]
    id?: IntFilter<"referral_points"> | number
    user_id?: IntFilter<"referral_points"> | number
    points?: IntFilter<"referral_points"> | number
    earned_at?: DateTimeFilter<"referral_points"> | Date | string
    expires_at?: DateTimeFilter<"referral_points"> | Date | string
    used?: BoolFilter<"referral_points"> | boolean
    referred_user_id?: IntFilter<"referral_points"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    referred_user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type referral_pointsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    earned_at?: SortOrder
    expires_at?: SortOrder
    used?: SortOrder
    referred_user_id?: SortOrder
    user?: usersOrderByWithRelationInput
    referred_user?: usersOrderByWithRelationInput
  }

  export type referral_pointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: referral_pointsWhereInput | referral_pointsWhereInput[]
    OR?: referral_pointsWhereInput[]
    NOT?: referral_pointsWhereInput | referral_pointsWhereInput[]
    user_id?: IntFilter<"referral_points"> | number
    points?: IntFilter<"referral_points"> | number
    earned_at?: DateTimeFilter<"referral_points"> | Date | string
    expires_at?: DateTimeFilter<"referral_points"> | Date | string
    used?: BoolFilter<"referral_points"> | boolean
    referred_user_id?: IntFilter<"referral_points"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    referred_user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type referral_pointsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    earned_at?: SortOrder
    expires_at?: SortOrder
    used?: SortOrder
    referred_user_id?: SortOrder
    _count?: referral_pointsCountOrderByAggregateInput
    _avg?: referral_pointsAvgOrderByAggregateInput
    _max?: referral_pointsMaxOrderByAggregateInput
    _min?: referral_pointsMinOrderByAggregateInput
    _sum?: referral_pointsSumOrderByAggregateInput
  }

  export type referral_pointsScalarWhereWithAggregatesInput = {
    AND?: referral_pointsScalarWhereWithAggregatesInput | referral_pointsScalarWhereWithAggregatesInput[]
    OR?: referral_pointsScalarWhereWithAggregatesInput[]
    NOT?: referral_pointsScalarWhereWithAggregatesInput | referral_pointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"referral_points"> | number
    user_id?: IntWithAggregatesFilter<"referral_points"> | number
    points?: IntWithAggregatesFilter<"referral_points"> | number
    earned_at?: DateTimeWithAggregatesFilter<"referral_points"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"referral_points"> | Date | string
    used?: BoolWithAggregatesFilter<"referral_points"> | boolean
    referred_user_id?: IntWithAggregatesFilter<"referral_points"> | number
  }

  export type prizesWhereInput = {
    AND?: prizesWhereInput | prizesWhereInput[]
    OR?: prizesWhereInput[]
    NOT?: prizesWhereInput | prizesWhereInput[]
    id?: IntFilter<"prizes"> | number
    name?: StringFilter<"prizes"> | string
    description?: StringNullableFilter<"prizes"> | string | null
    points_required?: IntFilter<"prizes"> | number
    stock?: IntFilter<"prizes"> | number
    created_at?: DateTimeFilter<"prizes"> | Date | string
    claimed_prizes?: Claimed_prizesListRelationFilter
  }

  export type prizesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    points_required?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    claimed_prizes?: claimed_prizesOrderByRelationAggregateInput
  }

  export type prizesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: prizesWhereInput | prizesWhereInput[]
    OR?: prizesWhereInput[]
    NOT?: prizesWhereInput | prizesWhereInput[]
    name?: StringFilter<"prizes"> | string
    description?: StringNullableFilter<"prizes"> | string | null
    points_required?: IntFilter<"prizes"> | number
    stock?: IntFilter<"prizes"> | number
    created_at?: DateTimeFilter<"prizes"> | Date | string
    claimed_prizes?: Claimed_prizesListRelationFilter
  }, "id">

  export type prizesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    points_required?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
    _count?: prizesCountOrderByAggregateInput
    _avg?: prizesAvgOrderByAggregateInput
    _max?: prizesMaxOrderByAggregateInput
    _min?: prizesMinOrderByAggregateInput
    _sum?: prizesSumOrderByAggregateInput
  }

  export type prizesScalarWhereWithAggregatesInput = {
    AND?: prizesScalarWhereWithAggregatesInput | prizesScalarWhereWithAggregatesInput[]
    OR?: prizesScalarWhereWithAggregatesInput[]
    NOT?: prizesScalarWhereWithAggregatesInput | prizesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prizes"> | number
    name?: StringWithAggregatesFilter<"prizes"> | string
    description?: StringNullableWithAggregatesFilter<"prizes"> | string | null
    points_required?: IntWithAggregatesFilter<"prizes"> | number
    stock?: IntWithAggregatesFilter<"prizes"> | number
    created_at?: DateTimeWithAggregatesFilter<"prizes"> | Date | string
  }

  export type claimed_prizesWhereInput = {
    AND?: claimed_prizesWhereInput | claimed_prizesWhereInput[]
    OR?: claimed_prizesWhereInput[]
    NOT?: claimed_prizesWhereInput | claimed_prizesWhereInput[]
    id?: IntFilter<"claimed_prizes"> | number
    user_id?: IntFilter<"claimed_prizes"> | number
    prize_id?: IntFilter<"claimed_prizes"> | number
    claimed_at?: DateTimeFilter<"claimed_prizes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    prize?: XOR<PrizesScalarRelationFilter, prizesWhereInput>
  }

  export type claimed_prizesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
    claimed_at?: SortOrder
    user?: usersOrderByWithRelationInput
    prize?: prizesOrderByWithRelationInput
  }

  export type claimed_prizesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: claimed_prizesWhereInput | claimed_prizesWhereInput[]
    OR?: claimed_prizesWhereInput[]
    NOT?: claimed_prizesWhereInput | claimed_prizesWhereInput[]
    user_id?: IntFilter<"claimed_prizes"> | number
    prize_id?: IntFilter<"claimed_prizes"> | number
    claimed_at?: DateTimeFilter<"claimed_prizes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    prize?: XOR<PrizesScalarRelationFilter, prizesWhereInput>
  }, "id">

  export type claimed_prizesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
    claimed_at?: SortOrder
    _count?: claimed_prizesCountOrderByAggregateInput
    _avg?: claimed_prizesAvgOrderByAggregateInput
    _max?: claimed_prizesMaxOrderByAggregateInput
    _min?: claimed_prizesMinOrderByAggregateInput
    _sum?: claimed_prizesSumOrderByAggregateInput
  }

  export type claimed_prizesScalarWhereWithAggregatesInput = {
    AND?: claimed_prizesScalarWhereWithAggregatesInput | claimed_prizesScalarWhereWithAggregatesInput[]
    OR?: claimed_prizesScalarWhereWithAggregatesInput[]
    NOT?: claimed_prizesScalarWhereWithAggregatesInput | claimed_prizesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"claimed_prizes"> | number
    user_id?: IntWithAggregatesFilter<"claimed_prizes"> | number
    prize_id?: IntWithAggregatesFilter<"claimed_prizes"> | number
    claimed_at?: DateTimeWithAggregatesFilter<"claimed_prizes"> | Date | string
  }

  export type usersCreateInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetsCreateInput = {
    token: string
    expires_at: Date | string
    created_at?: Date | string
    user: usersCreateNestedOneWithoutPassword_resetsInput
  }

  export type password_resetsUncheckedCreateInput = {
    id?: number
    user_id: number
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type password_resetsUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPassword_resetsNestedInput
  }

  export type password_resetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetsCreateManyInput = {
    id?: number
    user_id: number
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type password_resetsUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateInput = {
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    organizer: usersCreateNestedOneWithoutEventsInput
    bookings?: bookingsCreateNestedManyWithoutEventInput
    reviews?: reviewsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    organizer_id: number
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutEventInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: usersUpdateOneRequiredWithoutEventsNestedInput
    bookings?: bookingsUpdateManyWithoutEventNestedInput
    reviews?: reviewsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutEventNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    organizer_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type eventsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type venuesCreateInput = {
    name: string
    address?: string | null
    city: string
    capacity: number
    contact_info?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type venuesUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    city: string
    capacity: number
    contact_info?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type venuesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type venuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type venuesCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    city: string
    capacity: number
    contact_info?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type venuesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type venuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsCreateInput = {
    type: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ticketsUncheckedCreateInput = {
    id?: number
    type: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ticketsUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsCreateManyInput = {
    id?: number
    type: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ticketsUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateInput = {
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    user: usersCreateNestedOneWithoutBookingsInput
    event: eventsCreateNestedOneWithoutBookingsInput
    payments?: paymentsCreateNestedManyWithoutBookingInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutBookingsNestedInput
    event?: eventsUpdateOneRequiredWithoutBookingsNestedInput
    payments?: paymentsUpdateManyWithoutBookingNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingsCreateManyInput = {
    id?: number
    user_id: number
    event_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
  }

  export type bookingsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date: Date | string
    status: string
    booking: bookingsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    booking_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date: Date | string
    status: string
  }

  export type paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    booking?: bookingsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsCreateManyInput = {
    id?: number
    booking_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date: Date | string
    status: string
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    event: eventsCreateNestedOneWithoutReviewsInput
    user: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    event_id: number
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type reviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventsUpdateOneRequiredWithoutReviewsNestedInput
    user?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsCreateManyInput = {
    id?: number
    event_id: number
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type reviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type couponsCreateInput = {
    code: string
    discount_percent: number
    issued_at: Date | string
    expires_at: Date | string
    is_used?: boolean
    source?: string | null
    user: usersCreateNestedOneWithoutCouponsInput
  }

  export type couponsUncheckedCreateInput = {
    id?: number
    code: string
    user_id: number
    discount_percent: number
    issued_at: Date | string
    expires_at: Date | string
    is_used?: boolean
    source?: string | null
  }

  export type couponsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type couponsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type couponsCreateManyInput = {
    id?: number
    code: string
    user_id: number
    discount_percent: number
    issued_at: Date | string
    expires_at: Date | string
    is_used?: boolean
    source?: string | null
  }

  export type couponsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type couponsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referral_pointsCreateInput = {
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    user: usersCreateNestedOneWithoutReferral_pointsInput
    referred_user: usersCreateNestedOneWithoutReferral_points_referredInput
  }

  export type referral_pointsUncheckedCreateInput = {
    id?: number
    user_id: number
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    referred_user_id: number
  }

  export type referral_pointsUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: usersUpdateOneRequiredWithoutReferral_pointsNestedInput
    referred_user?: usersUpdateOneRequiredWithoutReferral_points_referredNestedInput
  }

  export type referral_pointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    referred_user_id?: IntFieldUpdateOperationsInput | number
  }

  export type referral_pointsCreateManyInput = {
    id?: number
    user_id: number
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    referred_user_id: number
  }

  export type referral_pointsUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type referral_pointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    referred_user_id?: IntFieldUpdateOperationsInput | number
  }

  export type prizesCreateInput = {
    name: string
    description?: string | null
    points_required: number
    stock: number
    created_at?: Date | string
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutPrizeInput
  }

  export type prizesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    points_required: number
    stock: number
    created_at?: Date | string
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutPrizeInput
  }

  export type prizesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points_required?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed_prizes?: claimed_prizesUpdateManyWithoutPrizeNestedInput
  }

  export type prizesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points_required?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutPrizeNestedInput
  }

  export type prizesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    points_required: number
    stock: number
    created_at?: Date | string
  }

  export type prizesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points_required?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prizesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points_required?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimed_prizesCreateInput = {
    claimed_at: Date | string
    user: usersCreateNestedOneWithoutClaimed_prizesInput
    prize: prizesCreateNestedOneWithoutClaimed_prizesInput
  }

  export type claimed_prizesUncheckedCreateInput = {
    id?: number
    user_id: number
    prize_id: number
    claimed_at: Date | string
  }

  export type claimed_prizesUpdateInput = {
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutClaimed_prizesNestedInput
    prize?: prizesUpdateOneRequiredWithoutClaimed_prizesNestedInput
  }

  export type claimed_prizesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    prize_id?: IntFieldUpdateOperationsInput | number
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimed_prizesCreateManyInput = {
    id?: number
    user_id: number
    prize_id: number
    claimed_at: Date | string
  }

  export type claimed_prizesUpdateManyMutationInput = {
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimed_prizesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    prize_id?: IntFieldUpdateOperationsInput | number
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type Password_resetsListRelationFilter = {
    every?: password_resetsWhereInput
    some?: password_resetsWhereInput
    none?: password_resetsWhereInput
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type CouponsListRelationFilter = {
    every?: couponsWhereInput
    some?: couponsWhereInput
    none?: couponsWhereInput
  }

  export type Referral_pointsListRelationFilter = {
    every?: referral_pointsWhereInput
    some?: referral_pointsWhereInput
    none?: referral_pointsWhereInput
  }

  export type Claimed_prizesListRelationFilter = {
    every?: claimed_prizesWhereInput
    some?: claimed_prizesWhereInput
    none?: claimed_prizesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type password_resetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type couponsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type referral_pointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type claimed_prizesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    referral_code?: SortOrder
    referred_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    referred_by_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    referral_code?: SortOrder
    referred_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    referral_code?: SortOrder
    referred_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    referred_by_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type password_resetsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type password_resetsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type password_resetsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type password_resetsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type password_resetsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    category?: SortOrder
    image?: SortOrder
    organizer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    organizer_id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    category?: SortOrder
    image?: SortOrder
    organizer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    category?: SortOrder
    image?: SortOrder
    organizer_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    total_seats?: SortOrder
    available_seats?: SortOrder
    organizer_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type venuesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    capacity?: SortOrder
    contact_info?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type venuesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    capacity?: SortOrder
    contact_info?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    capacity?: SortOrder
    contact_info?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type venuesSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type ticketsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticketsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticketsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type EventsScalarRelationFilter = {
    is?: eventsWhereInput
    isNot?: eventsWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type BookingsScalarRelationFilter = {
    is?: bookingsWhereInput
    isNot?: bookingsWhereInput
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type couponsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    source?: SortOrder
  }

  export type couponsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
  }

  export type couponsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    source?: SortOrder
  }

  export type couponsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    source?: SortOrder
  }

  export type couponsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    discount_percent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type referral_pointsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    earned_at?: SortOrder
    expires_at?: SortOrder
    used?: SortOrder
    referred_user_id?: SortOrder
  }

  export type referral_pointsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    referred_user_id?: SortOrder
  }

  export type referral_pointsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    earned_at?: SortOrder
    expires_at?: SortOrder
    used?: SortOrder
    referred_user_id?: SortOrder
  }

  export type referral_pointsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    earned_at?: SortOrder
    expires_at?: SortOrder
    used?: SortOrder
    referred_user_id?: SortOrder
  }

  export type referral_pointsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    referred_user_id?: SortOrder
  }

  export type prizesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    points_required?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
  }

  export type prizesAvgOrderByAggregateInput = {
    id?: SortOrder
    points_required?: SortOrder
    stock?: SortOrder
  }

  export type prizesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    points_required?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
  }

  export type prizesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    points_required?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
  }

  export type prizesSumOrderByAggregateInput = {
    id?: SortOrder
    points_required?: SortOrder
    stock?: SortOrder
  }

  export type PrizesScalarRelationFilter = {
    is?: prizesWhereInput
    isNot?: prizesWhereInput
  }

  export type claimed_prizesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
    claimed_at?: SortOrder
  }

  export type claimed_prizesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
  }

  export type claimed_prizesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
    claimed_at?: SortOrder
  }

  export type claimed_prizesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
    claimed_at?: SortOrder
  }

  export type claimed_prizesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    prize_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutReferred_usersInput = {
    create?: XOR<usersCreateWithoutReferred_usersInput, usersUncheckedCreateWithoutReferred_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferred_usersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutReferred_byInput = {
    create?: XOR<usersCreateWithoutReferred_byInput, usersUncheckedCreateWithoutReferred_byInput> | usersCreateWithoutReferred_byInput[] | usersUncheckedCreateWithoutReferred_byInput[]
    connectOrCreate?: usersCreateOrConnectWithoutReferred_byInput | usersCreateOrConnectWithoutReferred_byInput[]
    createMany?: usersCreateManyReferred_byInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type password_resetsCreateNestedManyWithoutUserInput = {
    create?: XOR<password_resetsCreateWithoutUserInput, password_resetsUncheckedCreateWithoutUserInput> | password_resetsCreateWithoutUserInput[] | password_resetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetsCreateOrConnectWithoutUserInput | password_resetsCreateOrConnectWithoutUserInput[]
    createMany?: password_resetsCreateManyUserInputEnvelope
    connect?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
  }

  export type eventsCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type bookingsCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type couponsCreateNestedManyWithoutUserInput = {
    create?: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput> | couponsCreateWithoutUserInput[] | couponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutUserInput | couponsCreateOrConnectWithoutUserInput[]
    createMany?: couponsCreateManyUserInputEnvelope
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
  }

  export type referral_pointsCreateNestedManyWithoutUserInput = {
    create?: XOR<referral_pointsCreateWithoutUserInput, referral_pointsUncheckedCreateWithoutUserInput> | referral_pointsCreateWithoutUserInput[] | referral_pointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutUserInput | referral_pointsCreateOrConnectWithoutUserInput[]
    createMany?: referral_pointsCreateManyUserInputEnvelope
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
  }

  export type referral_pointsCreateNestedManyWithoutReferred_userInput = {
    create?: XOR<referral_pointsCreateWithoutReferred_userInput, referral_pointsUncheckedCreateWithoutReferred_userInput> | referral_pointsCreateWithoutReferred_userInput[] | referral_pointsUncheckedCreateWithoutReferred_userInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutReferred_userInput | referral_pointsCreateOrConnectWithoutReferred_userInput[]
    createMany?: referral_pointsCreateManyReferred_userInputEnvelope
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
  }

  export type claimed_prizesCreateNestedManyWithoutUserInput = {
    create?: XOR<claimed_prizesCreateWithoutUserInput, claimed_prizesUncheckedCreateWithoutUserInput> | claimed_prizesCreateWithoutUserInput[] | claimed_prizesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutUserInput | claimed_prizesCreateOrConnectWithoutUserInput[]
    createMany?: claimed_prizesCreateManyUserInputEnvelope
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutReferred_byInput = {
    create?: XOR<usersCreateWithoutReferred_byInput, usersUncheckedCreateWithoutReferred_byInput> | usersCreateWithoutReferred_byInput[] | usersUncheckedCreateWithoutReferred_byInput[]
    connectOrCreate?: usersCreateOrConnectWithoutReferred_byInput | usersCreateOrConnectWithoutReferred_byInput[]
    createMany?: usersCreateManyReferred_byInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type password_resetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_resetsCreateWithoutUserInput, password_resetsUncheckedCreateWithoutUserInput> | password_resetsCreateWithoutUserInput[] | password_resetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetsCreateOrConnectWithoutUserInput | password_resetsCreateOrConnectWithoutUserInput[]
    createMany?: password_resetsCreateManyUserInputEnvelope
    connect?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
  }

  export type eventsUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type couponsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput> | couponsCreateWithoutUserInput[] | couponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutUserInput | couponsCreateOrConnectWithoutUserInput[]
    createMany?: couponsCreateManyUserInputEnvelope
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
  }

  export type referral_pointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<referral_pointsCreateWithoutUserInput, referral_pointsUncheckedCreateWithoutUserInput> | referral_pointsCreateWithoutUserInput[] | referral_pointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutUserInput | referral_pointsCreateOrConnectWithoutUserInput[]
    createMany?: referral_pointsCreateManyUserInputEnvelope
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
  }

  export type referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput = {
    create?: XOR<referral_pointsCreateWithoutReferred_userInput, referral_pointsUncheckedCreateWithoutReferred_userInput> | referral_pointsCreateWithoutReferred_userInput[] | referral_pointsUncheckedCreateWithoutReferred_userInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutReferred_userInput | referral_pointsCreateOrConnectWithoutReferred_userInput[]
    createMany?: referral_pointsCreateManyReferred_userInputEnvelope
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
  }

  export type claimed_prizesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<claimed_prizesCreateWithoutUserInput, claimed_prizesUncheckedCreateWithoutUserInput> | claimed_prizesCreateWithoutUserInput[] | claimed_prizesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutUserInput | claimed_prizesCreateOrConnectWithoutUserInput[]
    createMany?: claimed_prizesCreateManyUserInputEnvelope
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutReferred_usersNestedInput = {
    create?: XOR<usersCreateWithoutReferred_usersInput, usersUncheckedCreateWithoutReferred_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferred_usersInput
    upsert?: usersUpsertWithoutReferred_usersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReferred_usersInput, usersUpdateWithoutReferred_usersInput>, usersUncheckedUpdateWithoutReferred_usersInput>
  }

  export type usersUpdateManyWithoutReferred_byNestedInput = {
    create?: XOR<usersCreateWithoutReferred_byInput, usersUncheckedCreateWithoutReferred_byInput> | usersCreateWithoutReferred_byInput[] | usersUncheckedCreateWithoutReferred_byInput[]
    connectOrCreate?: usersCreateOrConnectWithoutReferred_byInput | usersCreateOrConnectWithoutReferred_byInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutReferred_byInput | usersUpsertWithWhereUniqueWithoutReferred_byInput[]
    createMany?: usersCreateManyReferred_byInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutReferred_byInput | usersUpdateWithWhereUniqueWithoutReferred_byInput[]
    updateMany?: usersUpdateManyWithWhereWithoutReferred_byInput | usersUpdateManyWithWhereWithoutReferred_byInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type password_resetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_resetsCreateWithoutUserInput, password_resetsUncheckedCreateWithoutUserInput> | password_resetsCreateWithoutUserInput[] | password_resetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetsCreateOrConnectWithoutUserInput | password_resetsCreateOrConnectWithoutUserInput[]
    upsert?: password_resetsUpsertWithWhereUniqueWithoutUserInput | password_resetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_resetsCreateManyUserInputEnvelope
    set?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    disconnect?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    delete?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    connect?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    update?: password_resetsUpdateWithWhereUniqueWithoutUserInput | password_resetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_resetsUpdateManyWithWhereWithoutUserInput | password_resetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_resetsScalarWhereInput | password_resetsScalarWhereInput[]
  }

  export type eventsUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutOrganizerInput | eventsUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutOrganizerInput | eventsUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutOrganizerInput | eventsUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type bookingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUserInput | bookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUserInput | bookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUserInput | bookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUserInput | reviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUserInput | reviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUserInput | reviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type couponsUpdateManyWithoutUserNestedInput = {
    create?: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput> | couponsCreateWithoutUserInput[] | couponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutUserInput | couponsCreateOrConnectWithoutUserInput[]
    upsert?: couponsUpsertWithWhereUniqueWithoutUserInput | couponsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: couponsCreateManyUserInputEnvelope
    set?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    disconnect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    delete?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    update?: couponsUpdateWithWhereUniqueWithoutUserInput | couponsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: couponsUpdateManyWithWhereWithoutUserInput | couponsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: couponsScalarWhereInput | couponsScalarWhereInput[]
  }

  export type referral_pointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<referral_pointsCreateWithoutUserInput, referral_pointsUncheckedCreateWithoutUserInput> | referral_pointsCreateWithoutUserInput[] | referral_pointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutUserInput | referral_pointsCreateOrConnectWithoutUserInput[]
    upsert?: referral_pointsUpsertWithWhereUniqueWithoutUserInput | referral_pointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: referral_pointsCreateManyUserInputEnvelope
    set?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    disconnect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    delete?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    update?: referral_pointsUpdateWithWhereUniqueWithoutUserInput | referral_pointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: referral_pointsUpdateManyWithWhereWithoutUserInput | referral_pointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: referral_pointsScalarWhereInput | referral_pointsScalarWhereInput[]
  }

  export type referral_pointsUpdateManyWithoutReferred_userNestedInput = {
    create?: XOR<referral_pointsCreateWithoutReferred_userInput, referral_pointsUncheckedCreateWithoutReferred_userInput> | referral_pointsCreateWithoutReferred_userInput[] | referral_pointsUncheckedCreateWithoutReferred_userInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutReferred_userInput | referral_pointsCreateOrConnectWithoutReferred_userInput[]
    upsert?: referral_pointsUpsertWithWhereUniqueWithoutReferred_userInput | referral_pointsUpsertWithWhereUniqueWithoutReferred_userInput[]
    createMany?: referral_pointsCreateManyReferred_userInputEnvelope
    set?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    disconnect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    delete?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    update?: referral_pointsUpdateWithWhereUniqueWithoutReferred_userInput | referral_pointsUpdateWithWhereUniqueWithoutReferred_userInput[]
    updateMany?: referral_pointsUpdateManyWithWhereWithoutReferred_userInput | referral_pointsUpdateManyWithWhereWithoutReferred_userInput[]
    deleteMany?: referral_pointsScalarWhereInput | referral_pointsScalarWhereInput[]
  }

  export type claimed_prizesUpdateManyWithoutUserNestedInput = {
    create?: XOR<claimed_prizesCreateWithoutUserInput, claimed_prizesUncheckedCreateWithoutUserInput> | claimed_prizesCreateWithoutUserInput[] | claimed_prizesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutUserInput | claimed_prizesCreateOrConnectWithoutUserInput[]
    upsert?: claimed_prizesUpsertWithWhereUniqueWithoutUserInput | claimed_prizesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: claimed_prizesCreateManyUserInputEnvelope
    set?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    disconnect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    delete?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    update?: claimed_prizesUpdateWithWhereUniqueWithoutUserInput | claimed_prizesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: claimed_prizesUpdateManyWithWhereWithoutUserInput | claimed_prizesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: claimed_prizesScalarWhereInput | claimed_prizesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUncheckedUpdateManyWithoutReferred_byNestedInput = {
    create?: XOR<usersCreateWithoutReferred_byInput, usersUncheckedCreateWithoutReferred_byInput> | usersCreateWithoutReferred_byInput[] | usersUncheckedCreateWithoutReferred_byInput[]
    connectOrCreate?: usersCreateOrConnectWithoutReferred_byInput | usersCreateOrConnectWithoutReferred_byInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutReferred_byInput | usersUpsertWithWhereUniqueWithoutReferred_byInput[]
    createMany?: usersCreateManyReferred_byInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutReferred_byInput | usersUpdateWithWhereUniqueWithoutReferred_byInput[]
    updateMany?: usersUpdateManyWithWhereWithoutReferred_byInput | usersUpdateManyWithWhereWithoutReferred_byInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type password_resetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_resetsCreateWithoutUserInput, password_resetsUncheckedCreateWithoutUserInput> | password_resetsCreateWithoutUserInput[] | password_resetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetsCreateOrConnectWithoutUserInput | password_resetsCreateOrConnectWithoutUserInput[]
    upsert?: password_resetsUpsertWithWhereUniqueWithoutUserInput | password_resetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_resetsCreateManyUserInputEnvelope
    set?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    disconnect?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    delete?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    connect?: password_resetsWhereUniqueInput | password_resetsWhereUniqueInput[]
    update?: password_resetsUpdateWithWhereUniqueWithoutUserInput | password_resetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_resetsUpdateManyWithWhereWithoutUserInput | password_resetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_resetsScalarWhereInput | password_resetsScalarWhereInput[]
  }

  export type eventsUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput> | eventsCreateWithoutOrganizerInput[] | eventsUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizerInput | eventsCreateOrConnectWithoutOrganizerInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutOrganizerInput | eventsUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: eventsCreateManyOrganizerInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutOrganizerInput | eventsUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutOrganizerInput | eventsUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput> | bookingsCreateWithoutUserInput[] | bookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUserInput | bookingsCreateOrConnectWithoutUserInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUserInput | bookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingsCreateManyUserInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUserInput | bookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUserInput | bookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUserInput | reviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUserInput | reviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUserInput | reviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type couponsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput> | couponsCreateWithoutUserInput[] | couponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: couponsCreateOrConnectWithoutUserInput | couponsCreateOrConnectWithoutUserInput[]
    upsert?: couponsUpsertWithWhereUniqueWithoutUserInput | couponsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: couponsCreateManyUserInputEnvelope
    set?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    disconnect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    delete?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    connect?: couponsWhereUniqueInput | couponsWhereUniqueInput[]
    update?: couponsUpdateWithWhereUniqueWithoutUserInput | couponsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: couponsUpdateManyWithWhereWithoutUserInput | couponsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: couponsScalarWhereInput | couponsScalarWhereInput[]
  }

  export type referral_pointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<referral_pointsCreateWithoutUserInput, referral_pointsUncheckedCreateWithoutUserInput> | referral_pointsCreateWithoutUserInput[] | referral_pointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutUserInput | referral_pointsCreateOrConnectWithoutUserInput[]
    upsert?: referral_pointsUpsertWithWhereUniqueWithoutUserInput | referral_pointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: referral_pointsCreateManyUserInputEnvelope
    set?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    disconnect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    delete?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    update?: referral_pointsUpdateWithWhereUniqueWithoutUserInput | referral_pointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: referral_pointsUpdateManyWithWhereWithoutUserInput | referral_pointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: referral_pointsScalarWhereInput | referral_pointsScalarWhereInput[]
  }

  export type referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput = {
    create?: XOR<referral_pointsCreateWithoutReferred_userInput, referral_pointsUncheckedCreateWithoutReferred_userInput> | referral_pointsCreateWithoutReferred_userInput[] | referral_pointsUncheckedCreateWithoutReferred_userInput[]
    connectOrCreate?: referral_pointsCreateOrConnectWithoutReferred_userInput | referral_pointsCreateOrConnectWithoutReferred_userInput[]
    upsert?: referral_pointsUpsertWithWhereUniqueWithoutReferred_userInput | referral_pointsUpsertWithWhereUniqueWithoutReferred_userInput[]
    createMany?: referral_pointsCreateManyReferred_userInputEnvelope
    set?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    disconnect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    delete?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    connect?: referral_pointsWhereUniqueInput | referral_pointsWhereUniqueInput[]
    update?: referral_pointsUpdateWithWhereUniqueWithoutReferred_userInput | referral_pointsUpdateWithWhereUniqueWithoutReferred_userInput[]
    updateMany?: referral_pointsUpdateManyWithWhereWithoutReferred_userInput | referral_pointsUpdateManyWithWhereWithoutReferred_userInput[]
    deleteMany?: referral_pointsScalarWhereInput | referral_pointsScalarWhereInput[]
  }

  export type claimed_prizesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<claimed_prizesCreateWithoutUserInput, claimed_prizesUncheckedCreateWithoutUserInput> | claimed_prizesCreateWithoutUserInput[] | claimed_prizesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutUserInput | claimed_prizesCreateOrConnectWithoutUserInput[]
    upsert?: claimed_prizesUpsertWithWhereUniqueWithoutUserInput | claimed_prizesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: claimed_prizesCreateManyUserInputEnvelope
    set?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    disconnect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    delete?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    update?: claimed_prizesUpdateWithWhereUniqueWithoutUserInput | claimed_prizesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: claimed_prizesUpdateManyWithWhereWithoutUserInput | claimed_prizesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: claimed_prizesScalarWhereInput | claimed_prizesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPassword_resetsInput = {
    create?: XOR<usersCreateWithoutPassword_resetsInput, usersUncheckedCreateWithoutPassword_resetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPassword_resetsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPassword_resetsNestedInput = {
    create?: XOR<usersCreateWithoutPassword_resetsInput, usersUncheckedCreateWithoutPassword_resetsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPassword_resetsInput
    upsert?: usersUpsertWithoutPassword_resetsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPassword_resetsInput, usersUpdateWithoutPassword_resetsInput>, usersUncheckedUpdateWithoutPassword_resetsInput>
  }

  export type usersCreateNestedOneWithoutEventsInput = {
    create?: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEventsInput
    connect?: usersWhereUniqueInput
  }

  export type bookingsCreateNestedManyWithoutEventInput = {
    create?: XOR<bookingsCreateWithoutEventInput, bookingsUncheckedCreateWithoutEventInput> | bookingsCreateWithoutEventInput[] | bookingsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutEventInput | bookingsCreateOrConnectWithoutEventInput[]
    createMany?: bookingsCreateManyEventInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutEventInput = {
    create?: XOR<reviewsCreateWithoutEventInput, reviewsUncheckedCreateWithoutEventInput> | reviewsCreateWithoutEventInput[] | reviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventInput | reviewsCreateOrConnectWithoutEventInput[]
    createMany?: reviewsCreateManyEventInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<bookingsCreateWithoutEventInput, bookingsUncheckedCreateWithoutEventInput> | bookingsCreateWithoutEventInput[] | bookingsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutEventInput | bookingsCreateOrConnectWithoutEventInput[]
    createMany?: bookingsCreateManyEventInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<reviewsCreateWithoutEventInput, reviewsUncheckedCreateWithoutEventInput> | reviewsCreateWithoutEventInput[] | reviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventInput | reviewsCreateOrConnectWithoutEventInput[]
    createMany?: reviewsCreateManyEventInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEventsInput
    upsert?: usersUpsertWithoutEventsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEventsInput, usersUpdateWithoutEventsInput>, usersUncheckedUpdateWithoutEventsInput>
  }

  export type bookingsUpdateManyWithoutEventNestedInput = {
    create?: XOR<bookingsCreateWithoutEventInput, bookingsUncheckedCreateWithoutEventInput> | bookingsCreateWithoutEventInput[] | bookingsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutEventInput | bookingsCreateOrConnectWithoutEventInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutEventInput | bookingsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: bookingsCreateManyEventInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutEventInput | bookingsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutEventInput | bookingsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutEventNestedInput = {
    create?: XOR<reviewsCreateWithoutEventInput, reviewsUncheckedCreateWithoutEventInput> | reviewsCreateWithoutEventInput[] | reviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventInput | reviewsCreateOrConnectWithoutEventInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutEventInput | reviewsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: reviewsCreateManyEventInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutEventInput | reviewsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutEventInput | reviewsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<bookingsCreateWithoutEventInput, bookingsUncheckedCreateWithoutEventInput> | bookingsCreateWithoutEventInput[] | bookingsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutEventInput | bookingsCreateOrConnectWithoutEventInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutEventInput | bookingsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: bookingsCreateManyEventInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutEventInput | bookingsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutEventInput | bookingsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<reviewsCreateWithoutEventInput, reviewsUncheckedCreateWithoutEventInput> | reviewsCreateWithoutEventInput[] | reviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutEventInput | reviewsCreateOrConnectWithoutEventInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutEventInput | reviewsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: reviewsCreateManyEventInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutEventInput | reviewsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutEventInput | reviewsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<eventsCreateWithoutBookingsInput, eventsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutBookingsInput
    connect?: eventsWhereUniqueInput
  }

  export type paymentsCreateNestedManyWithoutBookingInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type eventsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<eventsCreateWithoutBookingsInput, eventsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutBookingsInput
    upsert?: eventsUpsertWithoutBookingsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutBookingsInput, eventsUpdateWithoutBookingsInput>, eventsUncheckedUpdateWithoutBookingsInput>
  }

  export type paymentsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutBookingInput | paymentsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutBookingInput | paymentsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutBookingInput | paymentsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutBookingInput | paymentsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutBookingInput | paymentsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutBookingInput | paymentsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type bookingsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutPaymentsInput
    connect?: bookingsWhereUniqueInput
  }

  export type bookingsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutPaymentsInput
    upsert?: bookingsUpsertWithoutPaymentsInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutPaymentsInput, bookingsUpdateWithoutPaymentsInput>, bookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type eventsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutReviewsInput
    connect?: eventsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type eventsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutReviewsInput
    upsert?: eventsUpsertWithoutReviewsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutReviewsInput, eventsUpdateWithoutReviewsInput>, eventsUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersCreateNestedOneWithoutCouponsInput = {
    create?: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCouponsInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCouponsInput
    upsert?: usersUpsertWithoutCouponsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCouponsInput, usersUpdateWithoutCouponsInput>, usersUncheckedUpdateWithoutCouponsInput>
  }

  export type usersCreateNestedOneWithoutReferral_pointsInput = {
    create?: XOR<usersCreateWithoutReferral_pointsInput, usersUncheckedCreateWithoutReferral_pointsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_pointsInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReferral_points_referredInput = {
    create?: XOR<usersCreateWithoutReferral_points_referredInput, usersUncheckedCreateWithoutReferral_points_referredInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_points_referredInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReferral_pointsNestedInput = {
    create?: XOR<usersCreateWithoutReferral_pointsInput, usersUncheckedCreateWithoutReferral_pointsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_pointsInput
    upsert?: usersUpsertWithoutReferral_pointsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReferral_pointsInput, usersUpdateWithoutReferral_pointsInput>, usersUncheckedUpdateWithoutReferral_pointsInput>
  }

  export type usersUpdateOneRequiredWithoutReferral_points_referredNestedInput = {
    create?: XOR<usersCreateWithoutReferral_points_referredInput, usersUncheckedCreateWithoutReferral_points_referredInput>
    connectOrCreate?: usersCreateOrConnectWithoutReferral_points_referredInput
    upsert?: usersUpsertWithoutReferral_points_referredInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReferral_points_referredInput, usersUpdateWithoutReferral_points_referredInput>, usersUncheckedUpdateWithoutReferral_points_referredInput>
  }

  export type claimed_prizesCreateNestedManyWithoutPrizeInput = {
    create?: XOR<claimed_prizesCreateWithoutPrizeInput, claimed_prizesUncheckedCreateWithoutPrizeInput> | claimed_prizesCreateWithoutPrizeInput[] | claimed_prizesUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutPrizeInput | claimed_prizesCreateOrConnectWithoutPrizeInput[]
    createMany?: claimed_prizesCreateManyPrizeInputEnvelope
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
  }

  export type claimed_prizesUncheckedCreateNestedManyWithoutPrizeInput = {
    create?: XOR<claimed_prizesCreateWithoutPrizeInput, claimed_prizesUncheckedCreateWithoutPrizeInput> | claimed_prizesCreateWithoutPrizeInput[] | claimed_prizesUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutPrizeInput | claimed_prizesCreateOrConnectWithoutPrizeInput[]
    createMany?: claimed_prizesCreateManyPrizeInputEnvelope
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
  }

  export type claimed_prizesUpdateManyWithoutPrizeNestedInput = {
    create?: XOR<claimed_prizesCreateWithoutPrizeInput, claimed_prizesUncheckedCreateWithoutPrizeInput> | claimed_prizesCreateWithoutPrizeInput[] | claimed_prizesUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutPrizeInput | claimed_prizesCreateOrConnectWithoutPrizeInput[]
    upsert?: claimed_prizesUpsertWithWhereUniqueWithoutPrizeInput | claimed_prizesUpsertWithWhereUniqueWithoutPrizeInput[]
    createMany?: claimed_prizesCreateManyPrizeInputEnvelope
    set?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    disconnect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    delete?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    update?: claimed_prizesUpdateWithWhereUniqueWithoutPrizeInput | claimed_prizesUpdateWithWhereUniqueWithoutPrizeInput[]
    updateMany?: claimed_prizesUpdateManyWithWhereWithoutPrizeInput | claimed_prizesUpdateManyWithWhereWithoutPrizeInput[]
    deleteMany?: claimed_prizesScalarWhereInput | claimed_prizesScalarWhereInput[]
  }

  export type claimed_prizesUncheckedUpdateManyWithoutPrizeNestedInput = {
    create?: XOR<claimed_prizesCreateWithoutPrizeInput, claimed_prizesUncheckedCreateWithoutPrizeInput> | claimed_prizesCreateWithoutPrizeInput[] | claimed_prizesUncheckedCreateWithoutPrizeInput[]
    connectOrCreate?: claimed_prizesCreateOrConnectWithoutPrizeInput | claimed_prizesCreateOrConnectWithoutPrizeInput[]
    upsert?: claimed_prizesUpsertWithWhereUniqueWithoutPrizeInput | claimed_prizesUpsertWithWhereUniqueWithoutPrizeInput[]
    createMany?: claimed_prizesCreateManyPrizeInputEnvelope
    set?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    disconnect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    delete?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    connect?: claimed_prizesWhereUniqueInput | claimed_prizesWhereUniqueInput[]
    update?: claimed_prizesUpdateWithWhereUniqueWithoutPrizeInput | claimed_prizesUpdateWithWhereUniqueWithoutPrizeInput[]
    updateMany?: claimed_prizesUpdateManyWithWhereWithoutPrizeInput | claimed_prizesUpdateManyWithWhereWithoutPrizeInput[]
    deleteMany?: claimed_prizesScalarWhereInput | claimed_prizesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutClaimed_prizesInput = {
    create?: XOR<usersCreateWithoutClaimed_prizesInput, usersUncheckedCreateWithoutClaimed_prizesInput>
    connectOrCreate?: usersCreateOrConnectWithoutClaimed_prizesInput
    connect?: usersWhereUniqueInput
  }

  export type prizesCreateNestedOneWithoutClaimed_prizesInput = {
    create?: XOR<prizesCreateWithoutClaimed_prizesInput, prizesUncheckedCreateWithoutClaimed_prizesInput>
    connectOrCreate?: prizesCreateOrConnectWithoutClaimed_prizesInput
    connect?: prizesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutClaimed_prizesNestedInput = {
    create?: XOR<usersCreateWithoutClaimed_prizesInput, usersUncheckedCreateWithoutClaimed_prizesInput>
    connectOrCreate?: usersCreateOrConnectWithoutClaimed_prizesInput
    upsert?: usersUpsertWithoutClaimed_prizesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClaimed_prizesInput, usersUpdateWithoutClaimed_prizesInput>, usersUncheckedUpdateWithoutClaimed_prizesInput>
  }

  export type prizesUpdateOneRequiredWithoutClaimed_prizesNestedInput = {
    create?: XOR<prizesCreateWithoutClaimed_prizesInput, prizesUncheckedCreateWithoutClaimed_prizesInput>
    connectOrCreate?: prizesCreateOrConnectWithoutClaimed_prizesInput
    upsert?: prizesUpsertWithoutClaimed_prizesInput
    connect?: prizesWhereUniqueInput
    update?: XOR<XOR<prizesUpdateToOneWithWhereWithoutClaimed_prizesInput, prizesUpdateWithoutClaimed_prizesInput>, prizesUncheckedUpdateWithoutClaimed_prizesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateWithoutReferred_usersInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReferred_usersInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReferred_usersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReferred_usersInput, usersUncheckedCreateWithoutReferred_usersInput>
  }

  export type usersCreateWithoutReferred_byInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReferred_byInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReferred_byInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReferred_byInput, usersUncheckedCreateWithoutReferred_byInput>
  }

  export type usersCreateManyReferred_byInputEnvelope = {
    data: usersCreateManyReferred_byInput | usersCreateManyReferred_byInput[]
    skipDuplicates?: boolean
  }

  export type password_resetsCreateWithoutUserInput = {
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type password_resetsUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type password_resetsCreateOrConnectWithoutUserInput = {
    where: password_resetsWhereUniqueInput
    create: XOR<password_resetsCreateWithoutUserInput, password_resetsUncheckedCreateWithoutUserInput>
  }

  export type password_resetsCreateManyUserInputEnvelope = {
    data: password_resetsCreateManyUserInput | password_resetsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type eventsCreateWithoutOrganizerInput = {
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutEventInput
    reviews?: reviewsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutOrganizerInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutEventInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutOrganizerInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput>
  }

  export type eventsCreateManyOrganizerInputEnvelope = {
    data: eventsCreateManyOrganizerInput | eventsCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type bookingsCreateWithoutUserInput = {
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    event: eventsCreateNestedOneWithoutBookingsInput
    payments?: paymentsCreateNestedManyWithoutBookingInput
  }

  export type bookingsUncheckedCreateWithoutUserInput = {
    id?: number
    event_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingsCreateOrConnectWithoutUserInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput>
  }

  export type bookingsCreateManyUserInputEnvelope = {
    data: bookingsCreateManyUserInput | bookingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    event: eventsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUserInput = {
    id?: number
    event_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type reviewsCreateOrConnectWithoutUserInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput>
  }

  export type reviewsCreateManyUserInputEnvelope = {
    data: reviewsCreateManyUserInput | reviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type couponsCreateWithoutUserInput = {
    code: string
    discount_percent: number
    issued_at: Date | string
    expires_at: Date | string
    is_used?: boolean
    source?: string | null
  }

  export type couponsUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    discount_percent: number
    issued_at: Date | string
    expires_at: Date | string
    is_used?: boolean
    source?: string | null
  }

  export type couponsCreateOrConnectWithoutUserInput = {
    where: couponsWhereUniqueInput
    create: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput>
  }

  export type couponsCreateManyUserInputEnvelope = {
    data: couponsCreateManyUserInput | couponsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type referral_pointsCreateWithoutUserInput = {
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    referred_user: usersCreateNestedOneWithoutReferral_points_referredInput
  }

  export type referral_pointsUncheckedCreateWithoutUserInput = {
    id?: number
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    referred_user_id: number
  }

  export type referral_pointsCreateOrConnectWithoutUserInput = {
    where: referral_pointsWhereUniqueInput
    create: XOR<referral_pointsCreateWithoutUserInput, referral_pointsUncheckedCreateWithoutUserInput>
  }

  export type referral_pointsCreateManyUserInputEnvelope = {
    data: referral_pointsCreateManyUserInput | referral_pointsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type referral_pointsCreateWithoutReferred_userInput = {
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    user: usersCreateNestedOneWithoutReferral_pointsInput
  }

  export type referral_pointsUncheckedCreateWithoutReferred_userInput = {
    id?: number
    user_id: number
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
  }

  export type referral_pointsCreateOrConnectWithoutReferred_userInput = {
    where: referral_pointsWhereUniqueInput
    create: XOR<referral_pointsCreateWithoutReferred_userInput, referral_pointsUncheckedCreateWithoutReferred_userInput>
  }

  export type referral_pointsCreateManyReferred_userInputEnvelope = {
    data: referral_pointsCreateManyReferred_userInput | referral_pointsCreateManyReferred_userInput[]
    skipDuplicates?: boolean
  }

  export type claimed_prizesCreateWithoutUserInput = {
    claimed_at: Date | string
    prize: prizesCreateNestedOneWithoutClaimed_prizesInput
  }

  export type claimed_prizesUncheckedCreateWithoutUserInput = {
    id?: number
    prize_id: number
    claimed_at: Date | string
  }

  export type claimed_prizesCreateOrConnectWithoutUserInput = {
    where: claimed_prizesWhereUniqueInput
    create: XOR<claimed_prizesCreateWithoutUserInput, claimed_prizesUncheckedCreateWithoutUserInput>
  }

  export type claimed_prizesCreateManyUserInputEnvelope = {
    data: claimed_prizesCreateManyUserInput | claimed_prizesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutReferred_usersInput = {
    update: XOR<usersUpdateWithoutReferred_usersInput, usersUncheckedUpdateWithoutReferred_usersInput>
    create: XOR<usersCreateWithoutReferred_usersInput, usersUncheckedCreateWithoutReferred_usersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReferred_usersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReferred_usersInput, usersUncheckedUpdateWithoutReferred_usersInput>
  }

  export type usersUpdateWithoutReferred_usersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReferred_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutReferred_byInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutReferred_byInput, usersUncheckedUpdateWithoutReferred_byInput>
    create: XOR<usersCreateWithoutReferred_byInput, usersUncheckedCreateWithoutReferred_byInput>
  }

  export type usersUpdateWithWhereUniqueWithoutReferred_byInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutReferred_byInput, usersUncheckedUpdateWithoutReferred_byInput>
  }

  export type usersUpdateManyWithWhereWithoutReferred_byInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutReferred_byInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    profile_picture?: StringNullableFilter<"users"> | string | null
    referral_code?: StringFilter<"users"> | string
    referred_by_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type password_resetsUpsertWithWhereUniqueWithoutUserInput = {
    where: password_resetsWhereUniqueInput
    update: XOR<password_resetsUpdateWithoutUserInput, password_resetsUncheckedUpdateWithoutUserInput>
    create: XOR<password_resetsCreateWithoutUserInput, password_resetsUncheckedCreateWithoutUserInput>
  }

  export type password_resetsUpdateWithWhereUniqueWithoutUserInput = {
    where: password_resetsWhereUniqueInput
    data: XOR<password_resetsUpdateWithoutUserInput, password_resetsUncheckedUpdateWithoutUserInput>
  }

  export type password_resetsUpdateManyWithWhereWithoutUserInput = {
    where: password_resetsScalarWhereInput
    data: XOR<password_resetsUpdateManyMutationInput, password_resetsUncheckedUpdateManyWithoutUserInput>
  }

  export type password_resetsScalarWhereInput = {
    AND?: password_resetsScalarWhereInput | password_resetsScalarWhereInput[]
    OR?: password_resetsScalarWhereInput[]
    NOT?: password_resetsScalarWhereInput | password_resetsScalarWhereInput[]
    id?: IntFilter<"password_resets"> | number
    user_id?: IntFilter<"password_resets"> | number
    token?: StringFilter<"password_resets"> | string
    expires_at?: DateTimeFilter<"password_resets"> | Date | string
    created_at?: DateTimeFilter<"password_resets"> | Date | string
  }

  export type eventsUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutOrganizerInput, eventsUncheckedUpdateWithoutOrganizerInput>
    create: XOR<eventsCreateWithoutOrganizerInput, eventsUncheckedCreateWithoutOrganizerInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutOrganizerInput, eventsUncheckedUpdateWithoutOrganizerInput>
  }

  export type eventsUpdateManyWithWhereWithoutOrganizerInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    title?: StringFilter<"events"> | string
    description?: StringNullableFilter<"events"> | string | null
    date?: DateTimeFilter<"events"> | Date | string
    time?: StringFilter<"events"> | string
    location?: StringFilter<"events"> | string
    price?: DecimalFilter<"events"> | Decimal | DecimalJsLike | number | string
    total_seats?: IntFilter<"events"> | number
    available_seats?: IntFilter<"events"> | number
    category?: StringFilter<"events"> | string
    image?: StringNullableFilter<"events"> | string | null
    organizer_id?: IntFilter<"events"> | number
    created_at?: DateTimeFilter<"events"> | Date | string
    updated_at?: DateTimeFilter<"events"> | Date | string
  }

  export type bookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUserInput, bookingsUncheckedUpdateWithoutUserInput>
    create: XOR<bookingsCreateWithoutUserInput, bookingsUncheckedCreateWithoutUserInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUserInput, bookingsUncheckedUpdateWithoutUserInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUserInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUserInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: IntFilter<"bookings"> | number
    user_id?: IntFilter<"bookings"> | number
    event_id?: IntFilter<"bookings"> | number
    quantity?: IntFilter<"bookings"> | number
    total_price?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFilter<"bookings"> | Date | string
    status?: StringFilter<"bookings"> | string
  }

  export type reviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUserInput, reviewsUncheckedUpdateWithoutUserInput>
    create: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUserInput, reviewsUncheckedUpdateWithoutUserInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUserInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    id?: IntFilter<"reviews"> | number
    event_id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeFilter<"reviews"> | Date | string
  }

  export type couponsUpsertWithWhereUniqueWithoutUserInput = {
    where: couponsWhereUniqueInput
    update: XOR<couponsUpdateWithoutUserInput, couponsUncheckedUpdateWithoutUserInput>
    create: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput>
  }

  export type couponsUpdateWithWhereUniqueWithoutUserInput = {
    where: couponsWhereUniqueInput
    data: XOR<couponsUpdateWithoutUserInput, couponsUncheckedUpdateWithoutUserInput>
  }

  export type couponsUpdateManyWithWhereWithoutUserInput = {
    where: couponsScalarWhereInput
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyWithoutUserInput>
  }

  export type couponsScalarWhereInput = {
    AND?: couponsScalarWhereInput | couponsScalarWhereInput[]
    OR?: couponsScalarWhereInput[]
    NOT?: couponsScalarWhereInput | couponsScalarWhereInput[]
    id?: IntFilter<"coupons"> | number
    code?: StringFilter<"coupons"> | string
    user_id?: IntFilter<"coupons"> | number
    discount_percent?: IntFilter<"coupons"> | number
    issued_at?: DateTimeFilter<"coupons"> | Date | string
    expires_at?: DateTimeFilter<"coupons"> | Date | string
    is_used?: BoolFilter<"coupons"> | boolean
    source?: StringNullableFilter<"coupons"> | string | null
  }

  export type referral_pointsUpsertWithWhereUniqueWithoutUserInput = {
    where: referral_pointsWhereUniqueInput
    update: XOR<referral_pointsUpdateWithoutUserInput, referral_pointsUncheckedUpdateWithoutUserInput>
    create: XOR<referral_pointsCreateWithoutUserInput, referral_pointsUncheckedCreateWithoutUserInput>
  }

  export type referral_pointsUpdateWithWhereUniqueWithoutUserInput = {
    where: referral_pointsWhereUniqueInput
    data: XOR<referral_pointsUpdateWithoutUserInput, referral_pointsUncheckedUpdateWithoutUserInput>
  }

  export type referral_pointsUpdateManyWithWhereWithoutUserInput = {
    where: referral_pointsScalarWhereInput
    data: XOR<referral_pointsUpdateManyMutationInput, referral_pointsUncheckedUpdateManyWithoutUserInput>
  }

  export type referral_pointsScalarWhereInput = {
    AND?: referral_pointsScalarWhereInput | referral_pointsScalarWhereInput[]
    OR?: referral_pointsScalarWhereInput[]
    NOT?: referral_pointsScalarWhereInput | referral_pointsScalarWhereInput[]
    id?: IntFilter<"referral_points"> | number
    user_id?: IntFilter<"referral_points"> | number
    points?: IntFilter<"referral_points"> | number
    earned_at?: DateTimeFilter<"referral_points"> | Date | string
    expires_at?: DateTimeFilter<"referral_points"> | Date | string
    used?: BoolFilter<"referral_points"> | boolean
    referred_user_id?: IntFilter<"referral_points"> | number
  }

  export type referral_pointsUpsertWithWhereUniqueWithoutReferred_userInput = {
    where: referral_pointsWhereUniqueInput
    update: XOR<referral_pointsUpdateWithoutReferred_userInput, referral_pointsUncheckedUpdateWithoutReferred_userInput>
    create: XOR<referral_pointsCreateWithoutReferred_userInput, referral_pointsUncheckedCreateWithoutReferred_userInput>
  }

  export type referral_pointsUpdateWithWhereUniqueWithoutReferred_userInput = {
    where: referral_pointsWhereUniqueInput
    data: XOR<referral_pointsUpdateWithoutReferred_userInput, referral_pointsUncheckedUpdateWithoutReferred_userInput>
  }

  export type referral_pointsUpdateManyWithWhereWithoutReferred_userInput = {
    where: referral_pointsScalarWhereInput
    data: XOR<referral_pointsUpdateManyMutationInput, referral_pointsUncheckedUpdateManyWithoutReferred_userInput>
  }

  export type claimed_prizesUpsertWithWhereUniqueWithoutUserInput = {
    where: claimed_prizesWhereUniqueInput
    update: XOR<claimed_prizesUpdateWithoutUserInput, claimed_prizesUncheckedUpdateWithoutUserInput>
    create: XOR<claimed_prizesCreateWithoutUserInput, claimed_prizesUncheckedCreateWithoutUserInput>
  }

  export type claimed_prizesUpdateWithWhereUniqueWithoutUserInput = {
    where: claimed_prizesWhereUniqueInput
    data: XOR<claimed_prizesUpdateWithoutUserInput, claimed_prizesUncheckedUpdateWithoutUserInput>
  }

  export type claimed_prizesUpdateManyWithWhereWithoutUserInput = {
    where: claimed_prizesScalarWhereInput
    data: XOR<claimed_prizesUpdateManyMutationInput, claimed_prizesUncheckedUpdateManyWithoutUserInput>
  }

  export type claimed_prizesScalarWhereInput = {
    AND?: claimed_prizesScalarWhereInput | claimed_prizesScalarWhereInput[]
    OR?: claimed_prizesScalarWhereInput[]
    NOT?: claimed_prizesScalarWhereInput | claimed_prizesScalarWhereInput[]
    id?: IntFilter<"claimed_prizes"> | number
    user_id?: IntFilter<"claimed_prizes"> | number
    prize_id?: IntFilter<"claimed_prizes"> | number
    claimed_at?: DateTimeFilter<"claimed_prizes"> | Date | string
  }

  export type usersCreateWithoutPassword_resetsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPassword_resetsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPassword_resetsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPassword_resetsInput, usersUncheckedCreateWithoutPassword_resetsInput>
  }

  export type usersUpsertWithoutPassword_resetsInput = {
    update: XOR<usersUpdateWithoutPassword_resetsInput, usersUncheckedUpdateWithoutPassword_resetsInput>
    create: XOR<usersCreateWithoutPassword_resetsInput, usersUncheckedCreateWithoutPassword_resetsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPassword_resetsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPassword_resetsInput, usersUncheckedUpdateWithoutPassword_resetsInput>
  }

  export type usersUpdateWithoutPassword_resetsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPassword_resetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutEventsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutEventsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutEventsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
  }

  export type bookingsCreateWithoutEventInput = {
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    user: usersCreateNestedOneWithoutBookingsInput
    payments?: paymentsCreateNestedManyWithoutBookingInput
  }

  export type bookingsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingsCreateOrConnectWithoutEventInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutEventInput, bookingsUncheckedCreateWithoutEventInput>
  }

  export type bookingsCreateManyEventInputEnvelope = {
    data: bookingsCreateManyEventInput | bookingsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutEventInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    user: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type reviewsCreateOrConnectWithoutEventInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutEventInput, reviewsUncheckedCreateWithoutEventInput>
  }

  export type reviewsCreateManyEventInputEnvelope = {
    data: reviewsCreateManyEventInput | reviewsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutEventsInput = {
    update: XOR<usersUpdateWithoutEventsInput, usersUncheckedUpdateWithoutEventsInput>
    create: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEventsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEventsInput, usersUncheckedUpdateWithoutEventsInput>
  }

  export type usersUpdateWithoutEventsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type bookingsUpsertWithWhereUniqueWithoutEventInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutEventInput, bookingsUncheckedUpdateWithoutEventInput>
    create: XOR<bookingsCreateWithoutEventInput, bookingsUncheckedCreateWithoutEventInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutEventInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutEventInput, bookingsUncheckedUpdateWithoutEventInput>
  }

  export type bookingsUpdateManyWithWhereWithoutEventInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutEventInput>
  }

  export type reviewsUpsertWithWhereUniqueWithoutEventInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutEventInput, reviewsUncheckedUpdateWithoutEventInput>
    create: XOR<reviewsCreateWithoutEventInput, reviewsUncheckedCreateWithoutEventInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutEventInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutEventInput, reviewsUncheckedUpdateWithoutEventInput>
  }

  export type reviewsUpdateManyWithWhereWithoutEventInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutEventInput>
  }

  export type usersCreateWithoutBookingsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type eventsCreateWithoutBookingsInput = {
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    organizer: usersCreateNestedOneWithoutEventsInput
    reviews?: reviewsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    organizer_id: number
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: reviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutBookingsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutBookingsInput, eventsUncheckedCreateWithoutBookingsInput>
  }

  export type paymentsCreateWithoutBookingInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date: Date | string
    status: string
  }

  export type paymentsUncheckedCreateWithoutBookingInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date: Date | string
    status: string
  }

  export type paymentsCreateOrConnectWithoutBookingInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput>
  }

  export type paymentsCreateManyBookingInputEnvelope = {
    data: paymentsCreateManyBookingInput | paymentsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type eventsUpsertWithoutBookingsInput = {
    update: XOR<eventsUpdateWithoutBookingsInput, eventsUncheckedUpdateWithoutBookingsInput>
    create: XOR<eventsCreateWithoutBookingsInput, eventsUncheckedCreateWithoutBookingsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutBookingsInput, eventsUncheckedUpdateWithoutBookingsInput>
  }

  export type eventsUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: usersUpdateOneRequiredWithoutEventsNestedInput
    reviews?: reviewsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: reviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type paymentsUpsertWithWhereUniqueWithoutBookingInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutBookingInput, paymentsUncheckedUpdateWithoutBookingInput>
    create: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutBookingInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutBookingInput, paymentsUncheckedUpdateWithoutBookingInput>
  }

  export type paymentsUpdateManyWithWhereWithoutBookingInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutBookingInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    booking_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payments"> | string
    payment_date?: DateTimeFilter<"payments"> | Date | string
    status?: StringFilter<"payments"> | string
  }

  export type bookingsCreateWithoutPaymentsInput = {
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
    user: usersCreateNestedOneWithoutBookingsInput
    event: eventsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    user_id: number
    event_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
  }

  export type bookingsCreateOrConnectWithoutPaymentsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
  }

  export type bookingsUpsertWithoutPaymentsInput = {
    update: XOR<bookingsUpdateWithoutPaymentsInput, bookingsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutPaymentsInput, bookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bookingsUpdateWithoutPaymentsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutBookingsNestedInput
    event?: eventsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type eventsCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    organizer: usersCreateNestedOneWithoutEventsInput
    bookings?: bookingsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    organizer_id: number
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutReviewsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
  }

  export type usersCreateWithoutReviewsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type eventsUpsertWithoutReviewsInput = {
    update: XOR<eventsUpdateWithoutReviewsInput, eventsUncheckedUpdateWithoutReviewsInput>
    create: XOR<eventsCreateWithoutReviewsInput, eventsUncheckedCreateWithoutReviewsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutReviewsInput, eventsUncheckedUpdateWithoutReviewsInput>
  }

  export type eventsUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: usersUpdateOneRequiredWithoutEventsNestedInput
    bookings?: bookingsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutCouponsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCouponsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCouponsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
  }

  export type usersUpsertWithoutCouponsInput = {
    update: XOR<usersUpdateWithoutCouponsInput, usersUncheckedUpdateWithoutCouponsInput>
    create: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCouponsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCouponsInput, usersUncheckedUpdateWithoutCouponsInput>
  }

  export type usersUpdateWithoutCouponsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutReferral_pointsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReferral_pointsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReferral_pointsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReferral_pointsInput, usersUncheckedCreateWithoutReferral_pointsInput>
  }

  export type usersCreateWithoutReferral_points_referredInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    claimed_prizes?: claimed_prizesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReferral_points_referredInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    claimed_prizes?: claimed_prizesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReferral_points_referredInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReferral_points_referredInput, usersUncheckedCreateWithoutReferral_points_referredInput>
  }

  export type usersUpsertWithoutReferral_pointsInput = {
    update: XOR<usersUpdateWithoutReferral_pointsInput, usersUncheckedUpdateWithoutReferral_pointsInput>
    create: XOR<usersCreateWithoutReferral_pointsInput, usersUncheckedCreateWithoutReferral_pointsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReferral_pointsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReferral_pointsInput, usersUncheckedUpdateWithoutReferral_pointsInput>
  }

  export type usersUpdateWithoutReferral_pointsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReferral_pointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutReferral_points_referredInput = {
    update: XOR<usersUpdateWithoutReferral_points_referredInput, usersUncheckedUpdateWithoutReferral_points_referredInput>
    create: XOR<usersCreateWithoutReferral_points_referredInput, usersUncheckedCreateWithoutReferral_points_referredInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReferral_points_referredInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReferral_points_referredInput, usersUncheckedUpdateWithoutReferral_points_referredInput>
  }

  export type usersUpdateWithoutReferral_points_referredInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReferral_points_referredInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type claimed_prizesCreateWithoutPrizeInput = {
    claimed_at: Date | string
    user: usersCreateNestedOneWithoutClaimed_prizesInput
  }

  export type claimed_prizesUncheckedCreateWithoutPrizeInput = {
    id?: number
    user_id: number
    claimed_at: Date | string
  }

  export type claimed_prizesCreateOrConnectWithoutPrizeInput = {
    where: claimed_prizesWhereUniqueInput
    create: XOR<claimed_prizesCreateWithoutPrizeInput, claimed_prizesUncheckedCreateWithoutPrizeInput>
  }

  export type claimed_prizesCreateManyPrizeInputEnvelope = {
    data: claimed_prizesCreateManyPrizeInput | claimed_prizesCreateManyPrizeInput[]
    skipDuplicates?: boolean
  }

  export type claimed_prizesUpsertWithWhereUniqueWithoutPrizeInput = {
    where: claimed_prizesWhereUniqueInput
    update: XOR<claimed_prizesUpdateWithoutPrizeInput, claimed_prizesUncheckedUpdateWithoutPrizeInput>
    create: XOR<claimed_prizesCreateWithoutPrizeInput, claimed_prizesUncheckedCreateWithoutPrizeInput>
  }

  export type claimed_prizesUpdateWithWhereUniqueWithoutPrizeInput = {
    where: claimed_prizesWhereUniqueInput
    data: XOR<claimed_prizesUpdateWithoutPrizeInput, claimed_prizesUncheckedUpdateWithoutPrizeInput>
  }

  export type claimed_prizesUpdateManyWithWhereWithoutPrizeInput = {
    where: claimed_prizesScalarWhereInput
    data: XOR<claimed_prizesUpdateManyMutationInput, claimed_prizesUncheckedUpdateManyWithoutPrizeInput>
  }

  export type usersCreateWithoutClaimed_prizesInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
    referred_by?: usersCreateNestedOneWithoutReferred_usersInput
    referred_users?: usersCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsCreateNestedManyWithoutUserInput
    events?: eventsCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsCreateNestedManyWithoutUserInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    coupons?: couponsCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsCreateNestedManyWithoutReferred_userInput
  }

  export type usersUncheckedCreateWithoutClaimed_prizesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    referred_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    referred_users?: usersUncheckedCreateNestedManyWithoutReferred_byInput
    password_resets?: password_resetsUncheckedCreateNestedManyWithoutUserInput
    events?: eventsUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: bookingsUncheckedCreateNestedManyWithoutUserInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    referral_points?: referral_pointsUncheckedCreateNestedManyWithoutUserInput
    referral_points_referred?: referral_pointsUncheckedCreateNestedManyWithoutReferred_userInput
  }

  export type usersCreateOrConnectWithoutClaimed_prizesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClaimed_prizesInput, usersUncheckedCreateWithoutClaimed_prizesInput>
  }

  export type prizesCreateWithoutClaimed_prizesInput = {
    name: string
    description?: string | null
    points_required: number
    stock: number
    created_at?: Date | string
  }

  export type prizesUncheckedCreateWithoutClaimed_prizesInput = {
    id?: number
    name: string
    description?: string | null
    points_required: number
    stock: number
    created_at?: Date | string
  }

  export type prizesCreateOrConnectWithoutClaimed_prizesInput = {
    where: prizesWhereUniqueInput
    create: XOR<prizesCreateWithoutClaimed_prizesInput, prizesUncheckedCreateWithoutClaimed_prizesInput>
  }

  export type usersUpsertWithoutClaimed_prizesInput = {
    update: XOR<usersUpdateWithoutClaimed_prizesInput, usersUncheckedUpdateWithoutClaimed_prizesInput>
    create: XOR<usersCreateWithoutClaimed_prizesInput, usersUncheckedCreateWithoutClaimed_prizesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClaimed_prizesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClaimed_prizesInput, usersUncheckedUpdateWithoutClaimed_prizesInput>
  }

  export type usersUpdateWithoutClaimed_prizesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_by?: usersUpdateOneWithoutReferred_usersNestedInput
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
  }

  export type usersUncheckedUpdateWithoutClaimed_prizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
  }

  export type prizesUpsertWithoutClaimed_prizesInput = {
    update: XOR<prizesUpdateWithoutClaimed_prizesInput, prizesUncheckedUpdateWithoutClaimed_prizesInput>
    create: XOR<prizesCreateWithoutClaimed_prizesInput, prizesUncheckedCreateWithoutClaimed_prizesInput>
    where?: prizesWhereInput
  }

  export type prizesUpdateToOneWithWhereWithoutClaimed_prizesInput = {
    where?: prizesWhereInput
    data: XOR<prizesUpdateWithoutClaimed_prizesInput, prizesUncheckedUpdateWithoutClaimed_prizesInput>
  }

  export type prizesUpdateWithoutClaimed_prizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points_required?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prizesUncheckedUpdateWithoutClaimed_prizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points_required?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyReferred_byInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    referral_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type password_resetsCreateManyUserInput = {
    id?: number
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type eventsCreateManyOrganizerInput = {
    id?: number
    title: string
    description?: string | null
    date: Date | string
    time: string
    location: string
    price: Decimal | DecimalJsLike | number | string
    total_seats: number
    available_seats: number
    category: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type bookingsCreateManyUserInput = {
    id?: number
    event_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
  }

  export type reviewsCreateManyUserInput = {
    id?: number
    event_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type couponsCreateManyUserInput = {
    id?: number
    code: string
    discount_percent: number
    issued_at: Date | string
    expires_at: Date | string
    is_used?: boolean
    source?: string | null
  }

  export type referral_pointsCreateManyUserInput = {
    id?: number
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
    referred_user_id: number
  }

  export type referral_pointsCreateManyReferred_userInput = {
    id?: number
    user_id: number
    points: number
    earned_at: Date | string
    expires_at: Date | string
    used?: boolean
  }

  export type claimed_prizesCreateManyUserInput = {
    id?: number
    prize_id: number
    claimed_at: Date | string
  }

  export type usersUpdateWithoutReferred_byInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUpdateManyWithoutUserNestedInput
    events?: eventsUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUpdateManyWithoutUserNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    coupons?: couponsUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReferred_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referred_users?: usersUncheckedUpdateManyWithoutReferred_byNestedInput
    password_resets?: password_resetsUncheckedUpdateManyWithoutUserNestedInput
    events?: eventsUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: bookingsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    referral_points?: referral_pointsUncheckedUpdateManyWithoutUserNestedInput
    referral_points_referred?: referral_pointsUncheckedUpdateManyWithoutReferred_userNestedInput
    claimed_prizes?: claimed_prizesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutReferred_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetsUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUpdateWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutEventNestedInput
    reviews?: reviewsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutEventNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_seats?: IntFieldUpdateOperationsInput | number
    available_seats?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    event?: eventsUpdateOneRequiredWithoutBookingsNestedInput
    payments?: paymentsUpdateManyWithoutBookingNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type couponsUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type couponsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type couponsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_percent?: IntFieldUpdateOperationsInput | number
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referral_pointsUpdateWithoutUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    referred_user?: usersUpdateOneRequiredWithoutReferral_points_referredNestedInput
  }

  export type referral_pointsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    referred_user_id?: IntFieldUpdateOperationsInput | number
  }

  export type referral_pointsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    referred_user_id?: IntFieldUpdateOperationsInput | number
  }

  export type referral_pointsUpdateWithoutReferred_userInput = {
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: usersUpdateOneRequiredWithoutReferral_pointsNestedInput
  }

  export type referral_pointsUncheckedUpdateWithoutReferred_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type referral_pointsUncheckedUpdateManyWithoutReferred_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    earned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type claimed_prizesUpdateWithoutUserInput = {
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prize?: prizesUpdateOneRequiredWithoutClaimed_prizesNestedInput
  }

  export type claimed_prizesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prize_id?: IntFieldUpdateOperationsInput | number
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimed_prizesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    prize_id?: IntFieldUpdateOperationsInput | number
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateManyEventInput = {
    id?: number
    user_id: number
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    booking_date: Date | string
    status: string
  }

  export type reviewsCreateManyEventInput = {
    id?: number
    user_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type bookingsUpdateWithoutEventInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutBookingsNestedInput
    payments?: paymentsUpdateManyWithoutBookingNestedInput
  }

  export type bookingsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsUpdateWithoutEventInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyBookingInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date: Date | string
    status: string
  }

  export type paymentsUpdateWithoutBookingInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type claimed_prizesCreateManyPrizeInput = {
    id?: number
    user_id: number
    claimed_at: Date | string
  }

  export type claimed_prizesUpdateWithoutPrizeInput = {
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutClaimed_prizesNestedInput
  }

  export type claimed_prizesUncheckedUpdateWithoutPrizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimed_prizesUncheckedUpdateManyWithoutPrizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}