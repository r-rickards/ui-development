# API Best Practices

https://blog.octo.com/wp-content/uploads/2014/12/OCTO-Refcard_API_Design_EN_3.0.pdf

Great example api docs.
https://stripe.com/docs/api

DELETE
red
#D52C4D

GET
green
#04bc6c

POST
purple
#9362f3

## Express

```javascript
module.exports = (app, db) => {
    app.get('/posts', (req, res) =>
        db.post.findAll().then(result => res.json(result))
    );

    app.get('/post/:id', (req, res) =>
        db.post.findByPk(req.params.id).then(result => res.json(result))
    );

    app.post('/post', (req, res) =>
        db.post
            .create({
                title: req.body.title,
                content: req.body.content
            })
            .then(result => res.json(result))
    );

    app.put('/post/:id', (req, res) =>
        db.post
            .update(
                {
                    title: req.body.title,
                    content: req.body.content
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(result => res.json(result))
    );

    app.delete('/post/:id', (req, res) =>
        db.post
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.json(result))
    );
};
```

## Swagger Editor

http://editor.swagger.io/#/

## Example

[spotlight.io](https://stoplight.io/blog/crud-api-design/#for-your-reference)

### Example CRUD API in Action

Let’s look at a practical example and apply what we have learned about URLs and HTTP verbs. Our scenario will be a small CRM (Custom Relationship Management) system for a company (not the most creative example, I agree) with the following requirements:

The CRM has contacts, and each contact has notes and emails attached to them.
API consumers can create, read, update and delete contacts as well as notes.
Access to emails via the API is read-only (let’s assume the company’s mail server is integrated directly with the CRM and doesn’t use the API).
Based on those requirements, these are our resources:

**All contacts**: `/contacts`
**Individual contact**: `/contacts/{cID}`
**Notes for contact**: `/contacts/{cID}/notes`
**Individual note**: `/contacts/{cID}/notes/{nID}`
**Emails for contact**: `/contacts/{cID}/emails`
**Individual email**: `/email/{eID}`
Ok, let’s unpack and clarify a few things. Why are we using `/emails/{eID}` and not `/contacts/{cID}/emails/{eID}` for an individual email, even though the list of emails is at `/contacts/{cID}/emails` and we have followed this pattern for notes?

Ultimately, it boils down to the kind of identifiers you use. Our API designer’s reasoning could have been that Email IDs are globally unique, but Note IDs aren’t. Good API design keeps URLs as short as possible.

In an **OpenAPI** file, we define operations. An operation is a combination of a URL and a verb exposed by the API. Implementation frameworks also call those **routes**. So, which operations, or routes, do we need?

For contacts, we can do all **CRUD** actions, so there’ll be the following:

**GET** `/contacts`
**POST** `/contacts`
**GET** `/contacts/{cID}`
**PUT** `/contacts/{cID}`
**DELETE** `/contacts/{cID}`

These are the five operations that you’ll find most of the time: **GET** and **POST** on the _resource list URL_, and **GET**, **PUT** and **DELETE** on the _individual resource URLs_. Note that the curly braces indicate a placeholder. A few frameworks for API implementation present this structure by default.

The same approach applies to notes, except that we have longer URL with (sometimes) two placeholders:

**GET** `/contacts/{cID}/notes`
**POST** `/contacts/{cID}/notes`
**GET** `/contacts/{cID}/notes/{nID}`
**PUT** `/contacts/{cID}/notes/{nID}`
**DELETE** `/contacts/{cID}/notes/{nID}`

Finally, for emails, we have fewer operations as they are read-only:

**GET** `/contacts/{cID}/emails`
**GET** `/email/{eID}`

That covers all the routes for the current requirements. You can put them down in an OpenAPI file, for example using Stoplight’s Visual API Designer, to have a machine-readable definition that can feed into the next steps of your API’s lifecycle, such as implementation, documentation, and testing.

One final remark, before you start extending your API with new methods: You should never use an operation that follows the CRUD schema outlined here for a different purpose. For example, a `POST` on `/contacts/{cID}/`emails is reserved for creating emails, should that feature be required somewhere down the road. If you decide to leverage that verb and URL for a different action on a contact’s emails, you will stand in the way of your API’s evolution.
