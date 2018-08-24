# Moleskine NFC Proof of Concept
## Web Server
Sends back a hypothetical table of contents based on a Selinko NFC tag
affixed to a Moleskine notebook.

## Schema

### Notebooks

#### Attributes

* title

#### Associations

* belongs to a user
* has one tag
* had many pages

### Tags
Should, at some point be a join as a "stuck" tag.
#### Attributes

* uuid
* uri

#### Associations

* belongs to a notebook

### Users
Can be expanded to include the "if lost" fields.
#### Attributes

* First Name
* Last Name
* Email

#### Associations

* has many notebooks

### Pages
#### Attributes

* Number

#### Associations

* belongs to Notebook
* has many Page Items

### Page Items
#### Attributes

* body
* image

#### Associations

* belongs to a Page