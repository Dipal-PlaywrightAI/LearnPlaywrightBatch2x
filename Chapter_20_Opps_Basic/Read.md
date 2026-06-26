# Chapter 20 - OOP Basics And Modules

This chapter introduces object-oriented/module-style organization. The folder mainly practices exporting and importing reusable utilities and loggers.

## Practical Files

| File | Practical | What happens |
| --- | --- | --- |
| `export_utils.js` | Utility export | Defines reusable utility code for export. |
| `export_testutils.js` | Test utility export | Organizes helper logic for testing-style use. |
| `export_logger.js` | Logger export | Creates reusable logging behavior. |
| `Export_improt/export_improt.js` | Export/import demo | Demonstrates module import/export usage. |
| `Export_improt/Import_Utils.js` | Utility import | Imports and uses utility code. |
| `Export_improt/Import_logger.js` | Logger import | Imports and uses logger code. |
| `Export_improt/Export_DefaultExport.md` | Notes | Documents default export/import ideas. |

## Concepts Covered

- Code organization
- Exporting reusable functions/classes
- Importing helpers
- Default export vs named export
- Reusing utilities in test code

## How To Run

```bash
node Chapter_20_Opps_Basic/Export_improt/export_improt.js
node Chapter_20_Opps_Basic/Export_improt/Import_Utils.js
```

## Takeaway

Modules keep code reusable and organized, which is important before building larger OOP and Playwright projects.
