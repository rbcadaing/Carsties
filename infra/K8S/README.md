# K8S Command
    1. deploy - kubectl apply -f [deployment file]
    2. get pods details - kubectl get pods
    3. get deployments - kubectl get deployments
    4. get pod details - kubectl describe pod [podname]
    5. get services - kubectl get services
    6. restart server - kubectl rollout restart deployment [deployment name]
    7. get K8S namespace - kubectl get namespaces
    8. get services of a namespace - kubectl get services -n [service name]
    9. create secret for tls (ssl) kubectl create secret tls carsties-app-tls --key server.key --cert server.crt
    10. check secrets - kubectl get secrets