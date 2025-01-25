import openpyxl
from xml.dom.minidom import Document

def xlsx_to_xml(xlsx_file, sheet_name=None):
    """
    Reads an .xlsx file and converts its content into an XML DOM.

    Args:
        xlsx_file (str): Path to the .xlsx file.
        sheet_name (str): Name of the sheet to convert. If None, the first sheet is used.

    Returns:
        xml.dom.minidom.Document: The generated XML document.
    """
    # Load the workbook and select the sheet
    workbook = openpyxl.load_workbook(xlsx_file, data_only=True)
    sheet = workbook[sheet_name] if sheet_name else workbook.active

    # Create an XML document
    doc = Document()

    # Root element
    root = doc.createElement("Workbook")
    doc.appendChild(root)

    # Add sheet element
    sheet_element = doc.createElement("Sheet")
    sheet_element.setAttribute("name", sheet.title)
    root.appendChild(sheet_element)

    # Add rows and cells to the XML
    for row in sheet.iter_rows(values_only=True):
        row_element = doc.createElement("Row")
        sheet_element.appendChild(row_element)

        for cell_value in row:
            cell_element = doc.createElement("Cell")
            cell_text = doc.createTextNode(str(cell_value) if cell_value is not None else "")
            cell_element.appendChild(cell_text)
            row_element.appendChild(cell_element)

    return doc

# Example Usage
if __name__ == "__main__":
    xml_dom = xlsx_to_xml("C:\\Users\\MC DESMOND\\dextop\\Business\\sco\\Scolarite\\Api\\src\\Complied Economics 2000-2023.xlsx")
    print(xml_dom.toprettyxml(indent="  "))
