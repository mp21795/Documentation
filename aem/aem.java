public static Map getResourceProperties(Resource currentResource, ResourceResolver resourceResolver) {
    if (currentResource != null && resourceResolver != null) {
        Page targetPage = ModelsHelper.getContainingPage(currentResource.getPath(), resourceResolver);
        String pagePath = targetPage != null && targetPage.isValid() ? targetPage.getPath() : "#";
        ValueMap propertiesMap = currentResource.getValueMap();
        Map<String, Object> map = new HashMap(propertiesMap);
        map.put("pagePath", pagePath);
        return map;
    } else {
        log.error("Impossible to get Properties. \n currentResource: {} \n resourceResolver: {}", currentResource, resourceResolver);
        return null;
    }
}

private void findResourceInPath(String rootPath, String resourcePath, List<Map> list, Session session) throws RepositoryException {
    if (rootPath != null && resourcePath != null && list != null && session != null) {
        final String query = "/jcr:root" + rootPath + "//*[jcr:contains(.,\"" + keywords + "\")" +
                " and @sling:resourceType = \"" + resourcePath + "\"] ";
        QueryManager queryManager = session.getWorkspace().getQueryManager();
        Query finalQuery = queryManager.createQuery(query, "xpath");
        finalQuery.setLimit(100);
        QueryResult result = finalQuery.execute();
        NodeIterator nodes = result.getNodes();

        while (nodes.hasNext()) {
            Object node = nodes.next();
            Resource resource = resourceResolver.getResource(((Node) node).getPath());
            if (CommonUtility.getResourceProperties(resource, resourceResolver) != null) {
                list.add(CommonUtility.getResourceProperties(resource, resourceResolver));
            }
        }
    } else {
        log.error("Impossible to find Resource in path. \n rootPath: {} \n resourcePath: {} \n list: {} \n session: {}",
                rootPath, resourcePath, list, session);
    }
}