import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ListsUserReceiverComplimentsController } from "./controllers/ListsUserReceiverComplimentsController";
import { ListsUserSendComplimentsController } from "./controllers/ListsUserSendComplimentsController";
import { ListsTagController } from "./controllers/ListsTagController";
import { ListsUsersController } from "./controllers/ListsUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listsUserReceiverComplimentsController = new ListsUserReceiverComplimentsController();
const listsUserSendComplimentsController = new ListsUserSendComplimentsController();
const listsTagController = new ListsTagController();
const listUsersController = new ListsUsersController();

router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", listsTagController.handle);

router.post("/login", authenticateUserController.handle);

router.post("/compliment", ensureAuthenticated, createComplimentController.handle);
router.get("/compliment/receiver", ensureAuthenticated, listsUserReceiverComplimentsController.handle);
router.get("/compliment/send", ensureAuthenticated, listsUserSendComplimentsController.handle);

export { router }