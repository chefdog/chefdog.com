type Paragraph = {
    id: string
    title: string
    content: {
        document: [{
            children: [{
                text: string
            }]
        }]
    }
}

export default Paragraph