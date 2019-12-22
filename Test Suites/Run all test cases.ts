<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Run all test cases</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>94ff19fd-8fae-4c01-a839-2838288883ea</testSuiteGuid>
   <testCaseLink>
      <guid>e8cbe9ab-095b-4361-b52d-cebbeb87df46</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/appropriatePassword</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>c07e504b-7fd3-4cad-85f2-f1db3dfee6b3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/emailAlreadyExist</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>cbed432a-2682-41ed-859e-1a9248a8c794</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/SignupEmailDuplicate</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>cbed432a-2682-41ed-859e-1a9248a8c794</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>f2e1ec48-fa4e-495b-9e20-3a76010635ca</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>eedf62a9-8153-4cb9-9173-6338da374970</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/emptyEmailField</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>72b292b2-2cec-49b8-a5bf-410d48b03c7a</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/SignupEmailEmpty</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>72b292b2-2cec-49b8-a5bf-410d48b03c7a</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>98ff164b-7f2a-4877-8910-0ef0438157d3</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>ba031e9f-1020-4476-a44a-4162cee747b5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/emptyPasswordField</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>be1ff1ca-e6ce-4c6c-a67e-d9ddad3662de</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/SignupPasswordEmpty</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>be1ff1ca-e6ce-4c6c-a67e-d9ddad3662de</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>2534e6d2-c54e-4b32-a35d-b7f865edf9d7</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>6636b818-5053-4279-9f2e-1f9282fd9047</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/emptyUsernameField</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>16f56d38-f203-4f62-b361-d88e854dca8b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/longPassword</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>77d4b993-7425-43a5-b2da-221f515fd6b3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/shortPassword</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>68dbfa89-4b3b-402d-b6d3-7192129add33</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/tooLongUsername</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>e048b8d5-04cb-41f0-a07c-c0cef07f1a94</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/tooShortUsername</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b3a4833a-81f2-435b-90b4-1b962c0fbcdc</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/SignupUsernameShort</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>b3a4833a-81f2-435b-90b4-1b962c0fbcdc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>18db3233-cacf-478c-91f7-c2c9fef65982</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>bbb42691-503e-42d7-84cf-256116a0b1ce</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/signUp/usernameContainSpecialCharacter</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>f9376073-0e65-4a85-ae41-33bd58fb8eb5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/display_clockDisplay</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>d6aa1525-50cb-4031-864c-7095f56cb06e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/display_editTheme</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>8d7d92b2-6280-4038-9089-a2983f30318d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/editFullName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>528ead72-8a94-4b9d-b9fc-4b0a57f3eeba</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/editPassword_newPasswordCopyCurrentPassword</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>034b4173-b567-46b9-842d-cef91bd25726</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/editPassword_wrongCurrentPassword</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>9990766b-7401-4c9a-9009-f0446c6f33f2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/editPassword_wrongPasswordCheck</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>a5fe4553-14ee-4081-ba08-c1a1497aa2c6</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/security_endSession</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>1616aabc-b35b-4d8b-a033-34e7f4fddde7</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/security_viewAccessHistory</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>7dd1a120-23ae-42ed-9a68-46fd32a48767</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/security_viewAndLogoutOfActiveSessions</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>098078aa-42ce-45a6-a13b-21e3bb0e32ca</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TeamSettings/teamDescription</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>fc351eea-38e8-4dfd-b078-18dcebd27b1f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TeamSettings/teamName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>85015273-b95a-4831-9705-a3e27aea67ce</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPrivateChannelWithAppropriateName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>eac5c08d-8652-4722-aa04-cdc87eaad292</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPrivateChannelWithEmptyFieldName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>b33edad8-b920-446d-b55e-2fbe6ea9044a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPrivateChannelWithExistedNameButDifferentURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>237d5439-8363-4eac-8c36-0a40ceb12b2a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPublicChannelWithAppropriateName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>d928bc2c-4a6b-4151-8c75-61ea7d25ba49</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPublicChannelWithDifferentNameButExistedURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>b42326cc-732a-4445-b7e7-a0a5b9be0b84</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPublicChannelWithEmptyFieldName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>bf403dc7-8103-492f-b6b2-5095849ef628</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPublicChannelWithExistedNameAndURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>4984db2c-d2ed-4118-bc88-35a0bafefa1b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/createPublicChannelWithExistedNameButDifferentURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>d00b0676-3a86-40d0-9d0a-e3f355543e0f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/testPrivateChannelsAddButton</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>9a5e522f-3a70-4773-9169-1d46b7f968e4</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewChannel/testPublicChannelsAddButton</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>c8c087b7-7e6b-4459-8924-38a167181482</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/appropriateTeamName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>b4d77a39-aba8-4c97-be19-1032343235a6</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/emptyShortenURL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>ac36a03f-2c54-4db7-a3d5-ef03dac55855</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/emptyTeamNameField</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>ac3a71a8-52bc-49d1-8b98-b57a0e55d8aa</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/shortenURLContainUpperCaseLetter</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>fc24532a-d3fd-479d-a0bd-6249889eb7e0</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CreateTeamUrlUppercase</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>fc24532a-d3fd-479d-a0bd-6249889eb7e0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Url</value>
         <variableId>f3c90b82-321b-4b71-895b-8e554ba50612</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>4103d85c-244a-4857-af67-b6796cdfa306</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/shortenURLEndWithDash</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>37a601c0-39f5-4201-84dc-ef51d26bf22c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/shortenURLStartWithNumber</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>5d4b6ab0-3f4c-4e88-9d83-9fd07239384e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/teamNameContainOnlySpace</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>710e1485-7178-416e-b08d-476894eee34a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/teamNameContainSpecialCharacter</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>8fb02520-ed91-4756-8b3e-7afd1deb3609</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/tooLongTeamName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>4b6bd38b-8eec-49be-87d9-90844f6d1857</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CreateNewTeam/tooShortTeamName</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>57e29d77-34df-4c89-9a4a-6d870ea919b6</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Menu/About</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>aa9cc85f-663a-4fb6-89dd-efee58e77419</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Menu/Help</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>62da88cd-3e20-4468-8ea5-2e72aca554dd</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Menu/Privacy</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>d71afa10-4232-4b8e-bb8c-0a3b716d4e3b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Menu/Terms</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>a94f8126-29f0-4385-be58-86d04197cb1e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/ManageMembers/search</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>38aa301f-a56c-4a03-9eac-3f5e6e6e5d31</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Message/emojiDifferentTab</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>44c1084b-291c-4bed-9700-49c69d9ea0fe</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Message/emojiSameTab</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>3241c5d6-03c5-4769-bcc6-089d941a21fd</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Message/normal</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>7f80d0e0-7f3d-471e-ab92-65076e4a5165</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/AccountSettings/general_changeUsername</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
