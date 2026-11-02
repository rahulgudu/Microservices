# Microservices

## Build & Deploy

### Build and push Docker images

```bash
# Posts
docker build -t sushantskb/microservices:posts-latest ./posts
docker push sushantskb/microservices:posts-latest

# Comments
docker build -t sushantskb/microservices:comments-latest ./comments
docker push sushantskb/microservices:comments-latest

# Query
docker build -t sushantskb/microservices:query-latest ./query
docker push sushantskb/microservices:query-latest

# Moderation
docker build -t sushantskb/microservices:moderation-latest ./moderation
docker push sushantskb/microservices:moderation-latest

# Event Bus
docker build -t sushantskb/microservices:eventbus-latest ./eventbus
docker push sushantskb/microservices:eventbus-latest
```

### Deploy to Kubernetes

```bash
kubectl apply -f infra/k8s/posts-deply.yaml
kubectl apply -f infra/k8s/comments-depl.yaml
kubectl apply -f infra/k8s/query-depl.yaml
kubectl apply -f infra/k8s/moderation-depl.yaml
kubectl apply -f infra/k8s/event-bus-deply.yaml
kubectl apply -f infra/k8s/posts-srv.yaml
```

### Restart a service after code changes

Since we reuse the same image tag, you need to force Kubernetes to pull the updated image:

```bash
# Rebuild and push (example for posts)
docker build -t sushantskb/microservices:posts-latest ./posts
docker push sushantskb/microservices:posts-latest

# Restart the deployment
kubectl rollout restart deployment posts-depl

# Verify new pod is running
kubectl get pods -l app=posts
```

> **Note:** All deployments use `imagePullPolicy: Always` so Kubernetes pulls the latest image for the tag on every restart.

### Access services locally

Docker Desktop's kind cluster does not expose NodePort on localhost. Use port-forward:

```bash
kubectl port-forward service/posts-srv 4000:4000
kubectl port-forward service/comments-srv 5000:5000
kubectl port-forward service/query-srv 6080:6080
```

Then send requests to:
- Posts: `http://localhost:4000/posts`
- Comments: `http://localhost:5000/posts/:id/comments`
- Query: `http://localhost:6080/posts`

## Services

| Service | Port | Description |
|---|---|---|
| posts | 4000 | Create and list blog posts |
| comments | 5000 | Manage comments on posts |
| query | 6080 | Read model that aggregates events |
| moderation | 8000 | Moderates comment content |
| eventbus | 7000 | Receives and fans out events |
