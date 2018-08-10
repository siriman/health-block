# Health Block
#### A Hyperledger Fabric based one org halthcare network

##### Built upon Hyperledger Fabric version 1.2
This network is based on single org, single channel and single chaincode.
The backend is build using NodeJS and frontend is based on AngularJS (AngularJS part is half done, till date).

In the network, there are hospitals, doctors and patients as members and reports as assets.

When a patient creates a report, their balance is reduced by the fee amount mentioned in teh report and the hospital's balance is credited by the similar amount.

The app allows to create and query every members and assets as well as transfer of patient to another hospital.

## Basic Network Config

Note that this basic configuration uses pre-generated certificates and
key material, and also has predefined transactions to initialize a 
channel named "mychannel"

### Navigate to
* ``cd health-block/health-app``
To start the network, simply run ``startFabric.sh``.

#### Run to register admins and users
* ``node enrollAdmin.js``

* ``node registerUser.js``

* ``node server``

The server is running on port 8000



