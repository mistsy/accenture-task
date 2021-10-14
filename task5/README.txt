05
Lets use const/let instead of var throughout the project since it's more reliable and informative
Please pay attention to useState naming consistancy - fuel, seFuel (not setFeul)
The state responsible for fetch response data should be called fleet as we are recieving fleet object, 
the default state should be null to maintain type consistency

06
Const not var
All literal strings of statuses should be stored in object {key: 'status name'} for scalability and less errors, 
you should use keys in the code, easier to change statuses in the future in one place and avoid typos

09
Lets use Axios for HTTP requests - its faster to write with and less error prone (e. g. 1 then instead of 2 for GETs), we will be using it in project A
Fleet ID in http call should be dynamic for future scaling (${fleetId}), 
accordingly useEffect responsible for fetching should have the needed edependancy, 
it should be set to default '121' for now but remember about leaving the doors half open for possible changes in the future

13
(If production) Please remove all console.logs from the code

19
Condition error, it should be > 10000 not > 0 and with new state name - fleet.litres > 10000

25 
It's a better practice to use === instead of == when comparing values (we are in strict mode in React)