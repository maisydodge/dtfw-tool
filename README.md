```sh
git clone https://github.com/maisydodge/dtfw-tool.git
npm install
npm start
```

# Resources

[Create React App](https://github.com/facebookincubator/create-react-app)

[React Bootstrap Table](https://github.com/AllenFang/react-bootstrap-table)

# Description

This tool consists of two main tables - Device Types and Firmware Upgrades - and can
be navigated between using the two tabs at the top([React-Tabs](https://github.com/reactjs/react-tabs)). 
Both tables feature server-side pagination (page numbers and navigation arrows are located under the tables on the right side), as well
as the ability to delete a row from the table by selecting the little checkbox on the far left
of the desired row (thus highlighting the row in pink) and clicking the orange delete button. The search feature is not remote, so
searching only parses through the device types or firmware upgrades on the current page.

## Device Types

The following fields are editable directly on the table by simply clicking on the cell: Category, Brand, Model, Firmware Version, Platform, and Supported. To save the edited cell, you must click 'Enter' on the keyboard and then
select 'Ok' on the pop-up.

1.  Category: Category dropdown containing all of the possible categories in catalog.js.
2.  Brand: Brand dropdown containing the brand options that correspond to the already selected category in the catalog.
3.  Model: Model dropdown containing the model options that correspond to the selected category and brand in the catalog.
4.  Firmware Version: Text area
5.  Platform: Optional text area
6.  Supported: True/false checkbox

On the far left of each row is a column containing '(+)'. When this is clicked, a sub-table (outlined in purple) appears underneated the current row. This table, called 'Attributes Table,' displayed the uneditable properties of each device type. To close the Attirubtes Table, simply clicked the '(-)'. When the model is edited, the uneditable
attributes are updated as well.

Also available is the ability to filter the Category and Brand columns. Both are dropdowns that containing all possible categories and brand, respectively, that are present in the catalog. After selected one or both filters,
the resulting table contains only device types with the selected category and/or brand.

On the Category, Brand, and Model columns are two little up and down arrows. When clicked, the table is sorted alphabetically by the selected column.

To add a new device type, click the blue 'New' button. Once clicked, you will be presented with a modal. You must selected a category, brand, and model. Once these are all selected, the uneditable properties (Type, Label, OvrC Pro, OvrC Home, Log Time Series, WebConnect, Parental Controls, hasWireless, and SSH Tunnel) will fill with the correct values. Firmware version must be entered, the platform field is optional, and a checkbox is present for supported. If any of the required fields are not filled in, you will receive an error that asks you to insert a value.

## Firmware Upgrades

The following fields are editable directly on the table by simply clicking on the cell: URL, File Size, Release Date, Release Notes, and Platform. To save the edited cell, you must click 'Enter' on the keyboard and then
selected 'Ok' on the pop-up.

1.  URL: Text area
2.  File Size: Number input
3.  Release Date: Calendar select
4.  Release Notes: Text area. The Release Notes appear as a bulleted list. When editing, no need to input HTML; the input will automatically be translated to an HTML list, with a newline indicated a new list item (bullet)
5.  Platform: Optional text area
6.  Models: Not editable

The Release Date and Models columns have the ability to be sorted by clicking the little arrows at the column header.

To add a new firmware upgrade, click the blue 'New' button. Once clicked, you will be presented with a modal. You must enter a URL and file size, select a release date, and enter release notes. Once again, the platform field is optional. For the models field, you must select at least one model. The dropdown allows for multiple selections, but the models must be of the same type or else you will be presented with an error and request to fix it. The Attributes field is optional, and must be entered like the following: 'deviceType: CAMERA'. For more than one attribute, put each attribute on a new line. Device Type and File Name must be entered, as well as Firmware Version. The prerequisities field is optional, but has fields for deviceType, fileName, and releaseDate. Finally, Supported is available as a checkbox at the bottom of the modal, with the default value being false. Not entering a required value will result in a error and request to enter the value.
