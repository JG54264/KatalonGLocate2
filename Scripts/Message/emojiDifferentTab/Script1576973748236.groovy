import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://mattermost-heroku-test.herokuapp.com/')

WebUI.setText(findTestObject('Page_Mattermost/input_All team communication in one place s_703ef5'), 'jg54264')

WebUI.setEncryptedText(findTestObject('Page_Mattermost/input_All team communication in one place s_2f2733'), '5Ed5CIkj9UQfaMZXAkDVaQ==')

WebUI.click(findTestObject('Page_Mattermost/span_Sign in'))

WebUI.click(findTestObject('Page_Town Square - team 3 Mattermost/svg'))

WebUI.click(findTestObject('Object Repository/Page_Town Square - team 3 Mattermost/i_smile emoji_fa fa-leaf'))

WebUI.click(findTestObject('Object Repository/Page_Town Square - team 3 Mattermost/img_Nature_emoji-1f41e'))

WebUI.closeBrowser()

