# Chefdog dev adventure : Part 6, Azure

I used this tutorial: [docker compose azure](https://docs.microsoft.com/en-us/azure/container-instances/tutorial-docker-compose)

First we need to change the file handling, because we are going to deploy to azure.
We need to modify the docker compose yml file:

```
volumes:
  sqldata:
    driver: azure_file
    driver_opts:
      share_name: cfgfileshare
      storage_account_name: cfgstorage
```

This will create a storage account with a share in azure.