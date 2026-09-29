import {test,expect} from "@playwright/test";
import "dotenv/config";
import logger from "../utils/logger";
import { loginPage } from "../POM/loginPage";

test.only("login page using POM", async({page})=>{

                  await page.pause();
     
         let lp=new loginPage(page);
         logger.info("Going to login page");
         await lp.gotologinpageURl();
         await lp.validlogin();
         logger.info("login successful");

})

